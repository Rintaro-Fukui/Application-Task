import numpy as np
import pandas as pd
import imgsim
import cv2
from io import BytesIO

class task4_():

    def __init__(self):
        self.img = None
        self.vector = None
        self.df = pd.read_csv('./data/task4/img.csv', index_col=0)

    def loadImage(self, contents):
        nparr = np.fromstring(contents, np.uint8)
        self.img = cv2.imdecode(nparr, cv2.IMREAD_COLOR)

    def img2vec(self):
        vtr = imgsim.Vectorizer()
        self.vector = vtr.vectorize(self.img)

    def cosSim(self):
        db_vec = self.df.drop(['path'], axis=1)
        db_path = self.df['path']
        cos_sim_list = []

        for i in range(len(db_vec)):
            c = np.dot(self.vector, db_vec.iloc[i]) / (np.linalg.norm(self.vector) * np.linalg.norm(db_vec.iloc[i]))
            cos_sim_list.append(c)

        return db_path[np.argmax(cos_sim_list)]
