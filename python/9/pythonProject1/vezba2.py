def calculate_delivery(city):
    if city == "Beograd" or city == "Zagreb":
        return 500
    elif city == "Subotica":
        return 1200
    elif city == "Novi Sad":
        return 700
    elif city == "Split":
        return 1300
    else:
        return -1



belgrade_delivery = calculate_delivery("Beograd")
product_price = 200
total_cart_price = belgrade_delivery+product_price

print(f"Vasa narudzbina kosta {product_price}, dostava je {belgrade_delivery}, a ukupna korpa iznosi {total_cart_price}")