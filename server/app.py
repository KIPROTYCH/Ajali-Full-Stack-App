
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_cors import CORS
from flask_jwt_extended import JWTManager

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///ajali.db'
db = SQLAlchemy(app)
migrate = Migrate(app, db)

# Initialize JWT manager
jwt = JWTManager(app)

# Configure CORS
CORS(app)

# Import all the models and routes
from models import User, Admin, IncidentReport, Media
from routes import *

if __name__ == '__main__':
    from seed import seed_data
    with app.app_context():
        db.create_all()
        seed_data()
    app.run(debug=True)
