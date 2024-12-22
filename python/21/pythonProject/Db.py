import pymysql


# Konekcija ka bazi:
    # __init__ -> konkecija SQL -> connection

class Db:

    def __init__(self):
        self.connection = pymysql.connect(
            host="localhost",
            user="root",
            password="",
            database="oop_2"
        )