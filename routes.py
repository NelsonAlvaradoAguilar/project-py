# routes.py
from fastapi import APIRouter, Depends, UploadFile, File
from sqlalchemy.orm import Session
from db import get_db
import crud, schemas, utils

router = APIRouter()

# ---- People ----
@router.get("/people/")
def read_people(db: Session = Depends(get_db)):
    return crud.get_people(db)

@router.post("/people/", response_model=schemas.UserResponse)
def create_person(user: schemas.UserCreate, db: Session = Depends(get_db)):
    return crud.create_person(db, user)

# ---- Things ----
@router.get("/things/")
def read_things(db: Session = Depends(get_db)):
    return crud.get_things(db)

@router.post("/things/")
def create_thing(thing: schemas.ThingCreate, db: Session = Depends(get_db)):
    return crud.create_thing(db, thing)

# ---- File Upload ----
@router.post("/upload/")
async def upload_file(file: UploadFile = File(...)):
    path = utils.save_file(file)
    return {"file_path": path}

# ---- CSV ----
@router.get("/save_user_csv/")
def save_user_csv(user_id: int, name: str):
    utils.save_to_csv([user_id, name])
    return {"message": f"User {name} saved to CSV"}
