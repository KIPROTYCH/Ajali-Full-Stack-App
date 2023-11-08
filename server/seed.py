from app import app, db
from models import User, Admin, IncidentReport, Media

def seed_data():
    with app.app_context():
        create_users()
        create_admins()
        create_incident_reports()
        print("Seeded Data Successfully!!")

def create_users():
    users = [
        User(username='yegon', password='qwert1234', email='yegon@gmail.com'),
        User(username='mambet', password='password', email='mambet@gmail.com'),
    ]
    db.session.add_all(users)
    db.session.commit()

def create_admins():
    admins = [
        Admin(username='admin1', password='admin1'),
        Admin(username='admin2', password='admin2'),
    ]
    db.session.add_all(admins)
    db.session.commit()

def create_incident_reports():
    incident_reports = [
        IncidentReport(user_id=1, title='Incident 1', description='Description 1', status='Open', geolocation='Location 1'),
        IncidentReport(user_id=2, title='Incident 2', description='Description 2', status='Closed', geolocation='Location 2'),
    ]
    db.session.add_all(incident_reports)
    db.session.commit()

    media = [
        Media(report_id=1, type='Image', media_url='image_url_1'),
        Media(report_id=1, type='Video', media_url='video_url_1'),
        Media(report_id=2, type='Image', media_url='image_url_2'),
    ]
    db.session.add_all(media)
    db.session.commit()

if __name__ == '__main__':
    seed_data()
