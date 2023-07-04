import numpy as np
import imgsim
import cv2
from io import BytesIO

class task4:

    def __init__(self) -> None:
        pass

    def preprocessing(self, contents):

        # 画像ファイルの読み込み
        nparr = np.fromstring(contents, np.uint8)
        img = cv2.imdecode(nparr, cv2.IMREAD_COLOR)

        # ベクトルに変換
        vtr = imgsim.Vectorizer()
        vector = vtr.vectorize(img)

        return vector

    def cos_sim(self, vector):

        return
