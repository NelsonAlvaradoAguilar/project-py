
from db import Base, engine
from models import Person, Thing

# Drop all tables (only safe in dev!)
Base.metadata.drop_all(bind=engine)

# Create tables based on the updated models
Base.metadata.create_all(bind=engine)

print("Database tables created/reset successfully!")
