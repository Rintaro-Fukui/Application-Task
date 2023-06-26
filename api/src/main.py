from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import re

app = FastAPI()

origins = [
    "http://localhost:3000",
    "https://application-task.vercel.app",
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
@app.post("/task1")
async def task1(n1:float, n2:float):
    result = float(n1) + float(n2)
    return {
        "input":{"n1": n1, "n2": n2},
        "output":{"result": result},
    }

# 6/21 課題2
# 任意の文字列がstaff.txtに含まれているかを判定
@app.post("/task2")
async def task2(txt:str):
    staff = ["清木康",
            "武藤佳恭",
            "岩田洋夫",
            "中西崇文",
            "石橋直樹",
            "Virach Sornlertlamvanich",
            "Thatsanee Charoenporn",
            "佐々木史織",
            "中村亮太",
            "林康弘",
            "長谷川理",
            "岡田龍太郎",
            "圓﨑祐貴"]
    result = "います" if txt in staff else "みつかりません"
    return {
        "input":{"txt": txt},
        "output":{"result": result},
    }
