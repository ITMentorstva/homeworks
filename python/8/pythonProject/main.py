
products = {
    "hleb": {
        "cena": 100,
        "kolicina": 50
    },
    "pivo": {
        "cena": 150,
        "kolicina": 220
    },
    "jagode": {
        "cena": 120,
        "kolicina": 22
    }
}

# Izlistaj -> print

# Opcija: STOP

allowed_options = [
    "dodaj", "obrisi", "izlistaj",
    "stop", "istorijat", "obrisi sve",
    "prikazi najskuplji proizvod", "pnp"
]

# "prikazi najskuplji proizvod"
# Napraviti novu opciju: istorijat -> sve sto se desilo!
# Dodali ste novi proizvod IME
# Dodali ste novi proizvod IME
# Obrisali ste IME

option = None
history = []

while option not in allowed_options:
    option = input(f"Ste zelite da odradite? {", ".join(allowed_options)} \n").lower()

    if option == "obrisi":
        product = None

        while product not in products:
            product = input("Unesite ime proizvoda za brisanje: \n").lower()

        del products[product]

        msg = f"Obrisali ste {product} \n"
        print(msg)
        history.append(msg)
        option = None

    elif option == "dodaj":

        product = None

        while product in products or product == None:
            product = input("Unesite ime proizvoda koje ne postoji: \n")

        product_price = None
        while product_price is None or product_price <= 0:
            product_price = int(input("Unesite cenu proizvoda: \n"))

        product_amount = None
        while product_amount is None or product_amount < 0:
            product_amount = int(input("Unesite kolicinu proizvoda: \n"))

        products[product] = {
            "cena": product_price,
            "kolicina": product_amount
        }
        option = None

        msg = f"Dodali ste novi proizvod {product} \n"
        print(msg)
        history.append(msg)

    elif option == "izlistaj":
        print(products)
        option = None

    elif option == "istorijat":
        print(history)
        option = None

    elif option == "obrisi sve":
        products = {}
        option = None

    elif option == "prikazi najskuplji proizvod" or "pnp":

        highest_price = 0
        most_expensive_product = None

        for product in products:
            if highest_price < products[product]['cena']:
                highest_price = products[product]['cena']
                most_expensive_product = product

        print(products[most_expensive_product]['cena'])


# Kako da mi kada korisnik obrise ili doda proizvod opet ga pitamo sta zeli da uradi? Vracamo korisnika na pocetak
print(products)


