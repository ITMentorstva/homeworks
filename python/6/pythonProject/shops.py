

# Svaka prodavnica ima svoje ime, svaka prodavnica ima svoje proizvode i njihove cene

shops = {
    "Maxi": {
        "Hleb": 100,
        "Novine": 50
    },
    "Idea": {
        "Hleb": 95,
        "Novine": 62
    },
    "Roda": {
        "Hleb": 97,
        "Novine": 62
    },
    "FreeShop": {
        "Novine": 62
    },
    "Pijaca": {
        "Hleb": 99
    }
}


total_bread_price = 0
total_bread_shops = 0

# Ispisati prodavnicu koja ima najvisu cenu hleba => Maxi
max_bread_price = 0
max_bread_price_shop = ""

for shop_name, items in shops.items():
    if "Hleb" in items:
        total_bread_price += items["Hleb"]
        total_bread_shops += 1

        if max_bread_price < items['Hleb']:
            max_bread_price = items['Hleb']
            max_bread_price_shop = shop_name


average_bread_price = total_bread_price / total_bread_shops

print(average_bread_price)
print(max_bread_price, max_bread_price_shop)