
# Napišite program koji traži od korisnika da unese ime proizvoda, a zatim ispisuje cenu tog proizvoda.
# Ako proizvod ne postoji, ispišite poruku "Proizvod nije pronađen."

products = {"iphone 14": 999, "iphone 15": 1200, "samsung s23": 1200}

search_product = input("Unesite ime proizvoda: ").lower()

# Vezba: Proveriti da li postoji proizvod, Dodati da se ime proizvoda izvlaci iz inputa, Ispisite cenu proizvoda

if search_product in products:
    print(products[search_product])
else:
    print("Proizvod nije pronadjen")