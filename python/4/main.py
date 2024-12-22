
# Vezba 1:
# Napraviti listu proizvodi i ubaciti 3 proizvoda iPhone 14, iPhone 15, Samsung S23
# Napisati proveru koja proverava da li postoji "iPhone 14" u nasoj listi proizvoda

# HINT: in
products = ["iPhone 14", "iPhone 15", "Samsung S23"]

# napraviti zasebnu varijablu za ono sto trazimo
search_item = input("Unesite ime telefona koji trazite")

if search_item in products:
    print("Pronasli smo telefon")
else:
    print("Nismo pronasli trazeni proizvod")