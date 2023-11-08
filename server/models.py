from app import db
from werkzeug.security import generate_password_hash, check_password_hash

class User(db.Model):
    user_id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(255))
    password = db.Column(db.String(255))
    email = db.Column(db.String(255))

    def verify_password(self, password):
        # Use a secure method to compare the stored hashed password with the provided password
        return check_password_hash(self.password, password)

class Admin(db.Model):
    admin_id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(255))
    password = db.Column(db.String(255))

class IncidentReport(db.Model):
    report_id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.user_id'))
    title = db.Column(db.String(255))
    description = db.Column(db.Text)
    status = db.Column(db.String(255))
    geolocation = db.Column(db.String(255))

class Media(db.Model):
    media_id = db.Column(db.Integer, primary_key=True)
    report_id = db.Column(db.Integer, db.ForeignKey('incident_report.report_id'))
    type = db.Column(db.String(255))
    media_url = db.Column(db.String(255))
