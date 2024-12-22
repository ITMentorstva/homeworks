

# Conditional statement / Uslovi / Kondicionali -> IFovi :)

# poslednji_klik = "navigacija"
# ako je poslednji_klik navigacija onda prikazi padajuci meni

# kategorija, ako je kategorija "frizideri", prikazi frizidere

name = "marko"

# ako je ime Toma -> ispisi poruku "Pozdrav Tomo"
# Ako je ime neko drugo (ako nije toma) ispisi "Pozdrav neko drugi"

# if (ako) name (je ime) == (ako je njegova vrednost) "toma"
# ako je name "toma"
if name == "toma":
    print("Pozdrav Tomo!")
    print("Pozdrav drugi put!")
else:
    print("Pozdrav neko drugi")


age = 18

# uraditi proveru, ako korisnik ima vise od 18 godina ispisati "Punoletni ste"
# ako korisnik ima manje od 18 godina ispisati "Niste punoletni"

# HINT: if vi mozete koristiti sve matematicke operatere :)

if age >= 18:
    print("Punoletni ste")
else:
    print("Niste punoletni")
