
import pymysql

connection = pymysql.connect(
    host="localhost",
    user="root",
    password="123456",
    database="library",
    port=8888,
    cursorclass=pymysql.cursors.DictCursor
)

if connection.open:
    print("Connected")
else:
    print("Failed to connect")