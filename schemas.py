# schemas.py
from typing import Optional

from pydantic import BaseModel, Field, EmailStr, constr, conint
#test
# For creating a user
class UserCreate(BaseModel):
    name: constr(min_length=1)
    age: conint(gt=0, le=120)
    email: Optional[EmailStr] = None

# Response model
class UserResponse(BaseModel):
    id: int
    name: str
    age: int
    email: EmailStr

    class Config:
        orm_mode = True

# Thing schema
class ThingCreate(BaseModel):
    description: str
    price: float
    owner_id: int

class ThingResponse(BaseModel):
    id: int
    description: str
    price: float
    owner_id: int

    class Config:
        orm_mode = True
