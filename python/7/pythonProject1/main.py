
products = {
    "hleb": {
        "cena": 100,
        "kolicina": 50
    },
    "pivo": {
        "cena": 150,
        "kolicina": 220
    }
}

option = None
while option not in ["dodaj", "obrisi"]:
    option = input("Ste zelite da odradite? [obrisi, dodaj]").lower()


if option == "obrisi":
    product = None

    while product not in products:
        product = input("Unesite ime proizvoda za brisanje: ").lower()

    del products[product]

elif option == "dodaj":

    product = None

    while product in products or product == None:
        product = input("Unesite ime proizvoda koje ne postoji")

    productPrice = None
    while productPrice == None or productPrice <= 0:
        productPrice = int(input("Unesite cenu proizvoda: "))

    productAmount = None
    while productAmount == None or productAmount < 0:
        productAmount = int(input("Unesite kolicinu proizvoda"))

    products[product] = {
        "cena": productPrice,
        "kolicina": productAmount
    }


# Kako da mi kada korisnik obrise ili doda proizvod opet ga pitamo sta zeli da uradi? Vracamo korisnika na pocetak

print(products)


