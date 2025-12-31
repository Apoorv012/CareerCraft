from fastapi import FastAPI
from app.api import health

app = FastAPI(title = "CareerCraft ML Service")

app.include_router(health.router)

@app.get("/")
async def root():
    return {"message" : "Welcome to CareerCraft."}