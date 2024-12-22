
# OOP

# Klase
# Osoba -> ime, prezime, visina, tezina -> Class
    # Tomislav, Nikolic, 181.5, 100 -> Object <- toma = Person() <- SELF
    # Marko, Markovic, 181.5, 100 -> Object
    # Sara, Petrovic, 181.5, 100 -> Object
# Product -> name, size, price, amount

# Klasa moze imati attribute (varijable), metode / def / funkcije
class Person:

    def __init__(self, name, age): # kada se kreira objekat mora da se prosledi ime
        self.name = name # To ime sto je prosledjeno vezujemo za taj objekat
        self.age = age

    def write_my_name(self):
        print(self.name, self.age) # Ispisi ime od ovog objekta


# Objekti
# class Product -> "hleb", 123, 90, 1
# class Product -> "krompir", 12, 123, 1
toma = Person("Toma", 31) # Napravili smo novi objekat
toma.write_my_name()

marko = Person("Marko", 35)
marko.write_my_name()

# write_my_name(marko)