# crud.py
from sqlalchemy.orm import Session
from models import Person, Thing
from schemas import UserCreate, ThingCreate

# Person
def get_people(db: Session):
    return db.query(Person).all()

def create_person(db: Session, user: UserCreate):
    db_person = Person(name=user.name, age=user.age , email=user.email)
    db.add(db_person)
    db.commit()
    db.refresh(db_person)
    return db_person

# Thing
def get_things(db: Session):
    return db.query(Thing).all()

def create_thing(db: Session, thing: ThingCreate):
    db_thing = Thing(description=thing.description, price=thing.price, owner_id=thing.owner_id)
    db.add(db_thing)
    db.commit()
    db.refresh(db_thing)
    return db_thing
