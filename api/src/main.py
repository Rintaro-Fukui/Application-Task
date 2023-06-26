from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"message": "Hello World"}

# 6/21 課題1
# 任意の数を足し合わせる
@app.post("/addition")
async def addition(n1:float, n2:float):
    result = float(n1) + float(n2)
    return {
        "input":{"n1": n1, "n2": n2},
        "output":{"result": result},
    }
