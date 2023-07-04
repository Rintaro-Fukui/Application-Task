import numpy as np
import imgsim
import cv2
from io import BytesIO

class task4_():

    def __init__(self):
        self.img = None
        self.vector = None

    def loadImage(self, contents):
        nparr = np.fromstring(contents, np.uint8)
        self.img = cv2.imdecode(nparr, cv2.IMREAD_COLOR)

    def img2vec(self):
        vtr = imgsim.Vectorizer()
        self.vector = vtr.vectorize(self.img)
