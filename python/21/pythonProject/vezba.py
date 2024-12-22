
from Product import Product
from ShoppingCart import ShoppingCart

iPhone16 = Product()
samsungS23Pro = Product()
samsungA55 = Product()

iPhone16.create("iPhone 16 pro sda", 1500, 5, "ios")
iPhone16.increment_number_of_products_for_type("ios", 5)

samsungS23Pro.create("Samsung S23 Pro sda", 1200, 200, "android")
samsungS23Pro.increment_number_of_products_for_type("android", 200)

samsungA55.create("Samsung A55 dsa", 500, 5, "android")
samsungA55.increment_number_of_products_for_type("android", 5)

phoneCart = ShoppingCart()
phoneCart.add_product(iPhone16)
phoneCart.add_product(iPhone16)
phoneCart.add_product(iPhone16)
phoneCart.add_product(samsungS23Pro)
phoneCart.add_product(samsungS23Pro)
phoneCart.add_product(samsungS23Pro)
phoneCart.add_product(samsungS23Pro)

phoneCart.show_products()

print(Product.number_of_types)