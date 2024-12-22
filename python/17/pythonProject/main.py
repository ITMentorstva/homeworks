
import pymysql

connection = pymysql.connect(
    host="localhost",
    user="root",
    password="123456",
    database="python17",
    port=8888
)

if connection.open:
    print("Connected :)")
else:
    print("Not connected")


# create_user -> ime, sifru, godine

def create_user(con, username, password, age):
    cursor = con.cursor()

    query = "INSERT INTO users (username, password, age) VALUES (%s, %s, %s)"
    cursor.execute(query, (username, password, age))
    con.commit()

    cursor.close()

create_user(connection,"Toma", "dwqqwdqdw", 55)
create_user(connection,"dwqdqwdqwd", "dwqqwdqdw", 55)



