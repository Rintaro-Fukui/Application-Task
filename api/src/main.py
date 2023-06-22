from fastapi import FastAPI

app = FastAPI()

@app.get("/")
async def root():
    return {"message": "Hello World"}

# 6/21 課題1
# 任意の数を足し合わせる
@app.get("/addition")
async def addition(n1:float, n2:float):
    result = float(n1) + float(n2)
    return {
        "input":[{"n1": n1, "n2": n2}],
        "output":[{"result": result}],
    }

