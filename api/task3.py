import numpy as np

def task3_(r:float, g:float, b:float):

    '''任意の色が赤/黄/青のどれに近いかを判定'''

    # 入力された色
    input_color = np.array([float(r), float(g), float(b)])
    # 赤/黄/青のRGB
    base_color = np.array([[255, 0, 0], [255, 255, 0], [0, 0, 255]])
    # 色のラベル
    base_label = ["赤", "黄", "青"]
    # コサイン類似度を格納するリスト
    cos_sim_list = []

    # コサイン類似度を算出してリストに格納
    for i in range(len(base_color)):
        c = np.dot(input_color, base_color[i]) / (np.linalg.norm(input_color) * np.linalg.norm(base_color[i]))
        cos_sim_list.append(c)

    # 類似度が最も高い色のラベルを返す
    return base_label[np.argmax(cos_sim_list)]
