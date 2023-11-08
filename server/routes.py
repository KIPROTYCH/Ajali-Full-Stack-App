from flask import request, jsonify
from werkzeug.utils import secure_filename
import os
from app import app, db
from models import User, Admin, IncidentReport, Media
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
from werkzeug.security import generate_password_hash, check_password_hash


UPLOAD_FOLDER = 'uploads'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

app.config['JWT_SECRET_KEY'] = 'super_secret'
jwt = JWTManager(app)

@app.route('/users/register', methods=['POST'])
def create_user():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')
    email = data.get('email')

    if not username or not password or not email:
        return jsonify({"message": "Please fill in all required fields"}), 400

    existing_user = User.query.filter_by(username=username).first()
    if existing_user:
        return jsonify({"message": "Username already exists"}), 400

    password_hash = generate_password_hash(password, method='sha256')
    new_user = User(username=username, password=password_hash, email=email)
    db.session.add(new_user)
    db.session.commit()
    return jsonify({"message": "User created successfully"}), 201

@app.route('/users/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    user = User.query.filter_by(username=username).first()
    admin = Admin.query.filter_by(username=username).first()

    if user and check_password_hash(user.password, password):
        access_token = create_access_token(identity=username)
        return jsonify(access_token=access_token), 200
    elif admin and check_password_hash(admin.password, password):
        access_token = create_access_token(identity=username)
        return jsonify(access_token=access_token), 200
    return jsonify(message="Invalid credentials"), 401

@app.route('/protected', methods=['GET'])
@jwt_required
def protected():
    current_user = get_jwt_identity()
    return jsonify(logged_in_as=current_user), 200

@app.route('/users', methods=['GET'])
def get_all_users():
    users = User.query.all()
    user_list = [{"user_id": user.user_id, "username": user.username, "email": user.email} for user in users]
    return jsonify(user_list)

@app.route('/users/<int:user_id>', methods=['GET'])
def get_user(user_id):
    user = User.query.get(user_id)
    if user is None:
        return jsonify({"message": "User not found"}), 404
    return jsonify({"user_id": user.user_id, "username": user.username, "email": user.email})

@app.route('/users/<int:user_id>', methods=['PUT'])
def update_user(user_id):
    data = request.get_json()
    user = User.query.get(user_id)
    if user is None:
        return jsonify({"message": "User not found"}), 404
    user.username = data['username']
    user.password = generate_password_hash(data['password'], method='sha256')
    user.email = data['email']
    db.session.commit()
    return jsonify({"message": "User updated successfully"})

@app.route('/users/<int:user_id>', methods=['PATCH'])
def partial_update_user(user_id):
    data = request.get_json()
    user = User.query.get(user_id)
    if user is None:
        return jsonify({"message": "User not found"}), 404
    if 'username' in data:
        user.username = data['username']
    if 'password' in data:
        user.password = generate_password_hash(data['password'], method='sha256')
    if 'email' in data:
        user.email = data['email']
    db.session.commit()
    return jsonify({"message": "User updated successfully"})

@app.route('/users/<int:user_id>', methods=['DELETE'])
def delete_user(user_id):
    user = User.query.get(user_id)
    if user is None:
        return jsonify({"message": "User not found"}), 404
    db.session.delete(user)
    db.session.commit()
    return jsonify({"message": "User deleted successfully"})

@app.route('/admins', methods=['GET'])
def get_all_admins():
    admins = Admin.query.all()
    admin_list = [{"admin_id": admin.admin_id, "username": admin.username} for admin in admins]
    return jsonify(admin_list)

@app.route('/admins', methods=['POST'])
def create_admin():
    data = request.get_json()
    new_admin = Admin(username=data['username'], password=generate_password_hash(data['password'], method='sha256'))
    db.session.add(new_admin)
    db.session.commit()
    return jsonify({"message": "Admin created successfully"})

@app.route('/admins/<int:admin_id>', methods=['GET'])
def get_admin(admin_id):
    admin = Admin.query.get(admin_id)
    if admin is None:
        return jsonify({"message": "Admin not found"}), 404
    return jsonify({"admin_id": admin.admin_id, "username": admin.username})

@app.route('/admins/<int:admin_id>', methods=['PUT'])
def update_admin(admin_id):
    data = request.get_json()
    admin = Admin.query.get(admin_id)
    if admin is None:
        return jsonify({"message": "Admin not found"}), 404
    admin.username = data['username']
    admin.password = generate_password_hash(data['password'], method='sha256')
    db.session.commit()
    return jsonify({"message": "Admin updated successfully"})

@app.route('/admins/<int:admin_id>', methods=['PATCH'])
def partial_update_admin(admin_id):
    data = request.get_json()
    admin = Admin.query.get(admin_id)
    if admin is None:
        return jsonify({"message": "Admin not found"}), 404
    if 'username' in data:
        admin.username = data['username']
    if 'password' in data:
        admin.password = generate_password_hash(data['password'], method='sha256')
    db.session.commit()
    return jsonify({"message": "Admin updated successfully"})

@app.route('/admins/<int:admin_id>', methods=['DELETE'])
def delete_admin(admin_id):
    admin = Admin.query.get(admin_id)
    if admin is None:
        return jsonify({"message": "Admin not found"}), 404
    db.session.delete(admin)
    db.session.commit()
    return jsonify({"message": "Admin deleted successfully"})

@app.route('/incident_reports', methods=['GET'])
def get_all_incident_reports():
    incident_reports = IncidentReport.query.all()
    reports_list = [{"report_id": report.report_id, "user_id": report.user_id, "title": report.title,
                    "description": report.description, "status": report.status, "geolocation": report.geolocation} for report in incident_reports]
    return jsonify(reports_list)

@app.route('/incident_reports', methods=['POST'])
def create_incident_report():
    data = request.get_json()
    new_report = IncidentReport(
        user_id=data['user_id'],
        title=data['title'],
        description=data['description'],
        status=data['status'],
        geolocation=data['geolocation']
    )

    db.session.add(new_report)
    db.session.commit()
    return jsonify({"message": "Incident report created successfully"}), 201

@app.route('/incident_reports/<int:report_id>', methods=['GET'])
def get_incident_report(report_id):
    report = IncidentReport.query.get(report_id)
    if report is None:
        return jsonify({"message": "Incident report not found"}), 404
    return jsonify({
        "report_id": report.report_id,
        "user_id": report.user_id,
        "title": report.title,
        "description": report.description,
        "status": report.status,
        "geolocation": report.geolocation
    })

@app.route('/incident_reports/<int:report_id>', methods=['PUT'])
def update_incident_report(report_id):
    data = request.get_json()
    report = IncidentReport.query.get(report_id)
    if report is None:
        return jsonify({"message": "Incident report not found"}), 404
    report.user_id = data['user_id']
    report.title = data['title']
    report.description = data['description']
    report.status = data['status']
    report.geolocation = data['geolocation']
    db.session.commit()
    return jsonify({"message": "Incident report updated successfully"})

@app.route('/incident_reports/<int:report_id>', methods=['PATCH'])
def partial_update_incident_report(report_id):
    data = request.get_json()
    report = IncidentReport.query.get(report_id)
    if report is None:
        return jsonify({"message": "Incident report not found"}), 404
    if 'user_id' in data:
        report.user_id = data['user_id']
    if 'title' in data:
        report.title = data['title']
    if 'description' in data:
        report.description = data['description']
    if 'status' in data:
        report.status = data['status']
    if 'geolocation' in data:
        report.geolocation = data['geolocation']
    db.session.commit()
    return jsonify({"message": "Incident report updated successfully"})

@app.route('/incident_reports/<int:report_id>', methods=['DELETE'])
def delete_incident_report(report_id):
    report = IncidentReport.query.get(report_id)
    if report is None:
        return jsonify({"message": "Incident report not found"}), 404
    db.session.delete(report)
    db.session.commit()
    return jsonify({"message": "Incident report deleted successfully"})

@app.route('/media', methods=['GET'])
def get_all_media():
    media = Media.query.all()
    media_list = [{"media_id": media.media_id, "report_id": media.report_id, "type": media.type, "media_url": media.media_url} for media in media]
    return jsonify(media_list)

@app.route('/media', methods=['POST'])
def create_media():
    if 'file' not in request.files:
        return jsonify({"message": "No file part"}), 400

    file = request.files['file']

    if file.filename == '':
        return jsonify({"message": "No selected file"}), 400

    if file:
        filename = secure_filename(file.filename)
        media_type = request.form['type']
        file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))

        new_media = Media(type=media_type, media_url=os.path.join(app.config['UPLOAD_FOLDER'], filename))
        db.session.add(new_media)
        db.session.commit()
        return jsonify({"message": "File uploaded successfully"}), 201

@app.route('/media/<int:media_id>', methods=['GET'])
def get_media(media_id):
    media = Media.query.get(media_id)
    if media is None:
        return jsonify({"message": "Media record not found"}), 404
    return jsonify({"media_id": media.media_id, "report_id": media.report_id, "type": media.type, "media_url": media.media_url})

@app.route('/media/<int:media_id>', methods=['PUT'])
def update_media(media_id):
    data = request.get_json()
    media = Media.query.get(media_id)
    if media is None:
        return jsonify({"message": "Media record not found"}), 404
    media.report_id = data['report_id']
    media.type = data['type']
    media.media_url = data['media_url']
    db.session.commit()
    return jsonify({"message": "Media record updated successfully"})

@app.route('/media/<int:media_id>', methods=['PATCH'])
def partial_update_media(media_id):
    data = request.get_json()
    media = Media.query.get(media_id)
    if media is None:
        return jsonify({"message": "Media record not found"}), 404
    if 'report_id' in data:
        media.report_id = data['report_id']
    if 'type' in data:
        media.type = data['type']
    if 'media_url' in data:
        media.media_url = data['media_url']
    db.session.commit()
    return jsonify({"message": "Media record updated successfully"})

@app.route('/media/<int:media_id>', methods=['DELETE'])
def delete_media(media_id):
    media = Media.query.get(media_id)
    if media is None:
        return jsonify({"message": "Media record not found"}), 404
    db.session.delete(media)
    db.session.commit()
    return jsonify({"message": "Media record deleted successfully"})