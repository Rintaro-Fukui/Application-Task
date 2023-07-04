def task2_(txt:str):

    '''任意の文字列がstaff.txtに含まれているかを判定'''

    # staff.txt
    staff = ["清木康", "武藤佳恭", "岩田洋夫",
        "中西崇文", "石橋直樹", "Virach Sornlertlamvanich",
        "Thatsanee Charoenporn", "佐々木史織", "中村亮太",
        "林康弘", "長谷川理", "岡田龍太郎", "圓﨑祐貴"]

    # 含まれているかを判定
    return "います" if txt in staff else "みつかりません"
