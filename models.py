# models.py
from sqlalchemy import Column, Integer, String, Float, ForeignKey
from sqlalchemy.orm import relationship
from db import Base

class Person(Base):
    __tablename__ = "people"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    age = Column(Integer)
    email = Column(String, nullable=True)  # NEW FIELD


    things = relationship("Thing", back_populates="person")

class Thing(Base):
    __tablename__ = "things"
    id = Column(Integer, primary_key=True, index=True)
    description = Column(String, nullable=False)
    price = Column(Float, nullable=False)
    owner_id = Column(Integer, ForeignKey("people.id"))

    person = relationship("Person", back_populates="things")
