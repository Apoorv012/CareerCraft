from fastapi import APIRouter

#Create a router

router = APIRouter()
@router.get("/health")
async def health_check():
    return{
        "status": "ok",
        "service": "ml-service"
    }
