
# Pitati korisnika da unese ime proizvoda
# Kada unese ime proizvoda dodati proizvod u "kasu"
# -> Korisnik mora uneti 3 proizvoda ukupno

register = list()

while len(register) < 3:
    item = input("Unesite ime proizvoda")
    register.append(item)

# Dok god broj stavki u register je manji od broja 3 pitati korisnika da unese novi
# Kada korisnik unese novi, dodati ga u register