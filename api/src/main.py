from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from io import BytesIO

import utils
import task1 as t1
import task2 as t2
import task3 as t3
import task4 as t4

app = FastAPI()
t4 = t4.task4_()

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
@app.post("/task1")
async def task1(n1:float, n2:float):

    result = t1.task1_(float(n1), float(n2))

    return {
        "input":{"n1": n1, "n2": n2},
        "output":{"result": result},
    }


# 6/21 課題2
@app.post("/task2")
async def task2(txt:str):

    result = t2.task2_(str(txt))

    return {
        "input":{"txt": txt},
        "output":{"result": result},
    }


# 6/28 課題1
@app.post("/task3")
async def task3(r:float, g:float, b:float):

    result = t3.task3_(float(r), float(g), float(b))

    return {
        "input":{"color": {"r": r, "g": g, "b": b}},
        "output":{"result": result},
    }


# 6/28 課題3
# 入力画像と近しい画像を出力
@app.post("/task4")
async def task4(file: UploadFile = File(...)):

    # 拡張子がjpegもしくはpngであるか判定
    extension = file.filename.split(".")[-1] in ("jpg", "jpeg", "png")
    if not extension:
        return "Image must be jpg or png."

    # 画像ファイルの読み込み
    contents = await file.read()
    nparr = np.fromstring(contents, np.uint8)
    img = cv2.imdecode(nparr, cv2.IMREAD_COLOR)

    # ベクトルに変換
    vtr = imgsim.Vectorizer()
    vector = vtr.vectorize(img)

    result = None

    return {
        "input": None,
        "output": "あああああ",
    }
