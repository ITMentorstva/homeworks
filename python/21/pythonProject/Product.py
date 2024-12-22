

# type: android, ios

# Product("iPhone 16 pro", 1500, 50, "ios") # amount = 50
# Product("iPhone 15 pro", 1500, 10, "ios")
# ios = 60 = Product

# # Product("Samsung 16 pro", 1500, 100, "android") # amount = 50
# # Product("Samsung 15 pro", 1500, 5, "android")

# ios = 60, android = 105

# number_of_types = { 'android': 1231, 'ios': 123123213 }

from Db import Db

#parent - Glavna klasa
#child - Klasa koju ucitavamo / nasledjujemo

# Product - Parent / Glavna
# Db - Child

# SRP (Single Responsibility)
class Product(Db):
    number_of_products = 0
    allowed_types = ['android', 'ios']
    number_of_types = {
        'android': 0,
        'ios': 0
    }

    def __init__(self):
        super().__init__()

    def create(self, name, price, amount, type):

        if amount < 1:
            raise ValueError("Amount must be more than 0")

        if type not in Product.allowed_types:
            raise ValueError("You didn't pass the correct type")

        if self.check_if_user_exists(name) is not None:
            raise ValueError("Product with this name already exists")

        self.name = name
        self.price = price
        self.amount = amount
        self.type = type


        cursor = self.connection.cursor()
        cursor.execute("INSERT INTO products (name, price, amount, type) VALUES (%s, %s, %s, %s)", (
            name, price, amount, type
        ))
        self.connection.commit()
        cursor.close()

    def increment_number_of_products_for_type(self, type, amount):
        Product.number_of_products += 1
        Product.number_of_types[type] += amount

    def check_if_user_exists(self, name):

        cursor = self.connection.cursor()
        cursor.execute("SELECT * FROM products WHERE name = %s", (name))
        self.connection.commit()

        result = cursor.fetchone()
        cursor.close()
        return result