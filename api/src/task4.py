import numpy as np
import imgsim
import cv2
from io import BytesIO

class task4_():

    def __init__(self) -> None:
        pass

    def loadImage(self, contents):
        nparr = np.fromstring(contents, np.uint8)
        img = cv2.imdecode(nparr, cv2.IMREAD_COLOR)
        return