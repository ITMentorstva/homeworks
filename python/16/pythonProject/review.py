import pymysql
import re
import bcrypt
import pymysql.cursors

#
# DEBUG
#
#
#
# user registration

HOST = "localhost"
USER = "root"
PASSWORD = ""
DATABASE = "project1"

ANSWER_POSITIVE = "da"

name_pattern = r"^[a-zA-Z]+$"
email_pattern = r"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$"


# create connection with sql
def create_conn():
    return pymysql.connect(host=HOST, user=USER, password=PASSWORD, database=DATABASE,
                           cursorclass=pymysql.cursors.DictCursor)


def check_user_exist(conn, email):
    with conn.cursor() as cursor:
        query = "SELECT * FROM users WHERE email=%s"
        cursor.execute(query, email)
        return cursor.fetchone()


def login(user):
    while True:
        password = input("Unesite lozinku da biste se ulogovali\n")
        # user = return_user_data(conn, email)
        return check_password(password, user['password'].encode('utf-8'))


def return_user_data(conn, email):
    with conn.cursor() as cursor:
        query = "SELECT * FROM users WHERE email=%s"
        cursor.execute(query, email)
        return cursor.fetchone()


def hash_password(password):
    return bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())


def check_password(user_password, hashed_password):
    return bcrypt.checkpw(user_password.encode('utf-8'), hashed_password)


def register_user(conn, email, password, first_name, last_name):
    with conn.cursor() as cursor:
        query = "INSERT INTO users (email, password, first_name, last_name) VALUES (%s, %s, %s, %s)"
        cursor.execute(query, (email, password.decode('utf-8'), first_name, last_name))
        # conn.commit()


def verify_name(name):
    if re.match(name_pattern, name):
        return name.lower().capitalize()
    else:
        return False


def verify_email(email):
    return re.match(email_pattern, email)


def main():
    conn = create_conn()

    email = ""
    user_password = ""
    action = ""
    first_name = ""
    last_name = ""

    while email == "":
        email = input("Unesite email adresu\n")
        if not verify_email(email):
            email = ""
        else:
            user = check_user_exist(conn, email)
    if user:
        login(user)

    if not user:
        while action == "":
            action = input("---REGISTRACIJA---\nDa li zelite da se registrujete [DA/NE]\n").lower()
            if action == ANSWER_POSITIVE:
                while first_name == "":
                    first_name = input("Unesite ime\n")
                    first_name = verify_name(first_name)
                    if first_name == False:
                        first_name = ""
                while last_name == "":
                    last_name = input("unesite prezime \n")
                    last_name = verify_name(last_name)
                    if last_name == False:
                        last_name = ""
                while user_password == "" or len(user_password) < 8:
                    user_password = input("unesite lozinku\n")
                user_password = hash_password(user_password)
                register_user(conn, email, user_password, first_name, last_name)


            elif action == 'ne':
                print("cao")
                exit()
            else:
                action = ""


if __name__ == "__main__":
    main()