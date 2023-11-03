from pydantic import BaseModel

class TodoRequest(BaseModel):
    title: str
    desc:str
