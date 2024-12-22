

# Korisnik treba da unese cenu korpe
# Ako je cena preko ili 1000 ispisati koliki popust su ostavirili (10%) - 1000, "Ostvarili ste 10% popusta, sto iznosi 100eur"
# Ako je cena ispod 1000 ispisati "Vasa korpa iznosi 1000"

# DONE: Imam cenu i proveru da li je preko 1000 ili manje
# DONE: Pitam korisnika za price (input)
# DONE: Racunam porez
# DONE: Izmeniti poruku koja se ispisuje
# DONE: Revidiram kod i proveravam da li to moze bolje

price = int(input("Unesite cenu korpe: "))

if price >= 1000:
    tax_amount = price*0.10
    print(f"Ostvarili ste 10% popusta, sto ukupno iznosi {tax_amount} eura")
else:
    print("Cena je manja od 1000")