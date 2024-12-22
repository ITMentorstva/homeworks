

def hello_world():
    print("Hello world")


def search(location, type):
    print(f"Pretrazujemo.. {location} - {type}")


# calculate_delivery("Beograd") -> izracunaj_dostavu
# Beograd - 500, Subotica, 1200, Novi Sad - 700, Zagreb - 500, Split - 1300
# Ako grad ne postoji, ispisati "Grad ne postoji"
def calculate_delivery(city):
    if city == "Beograd" or city == "Zagreb":
        print("Dostava je 500 din")
    elif city == "Subotica":
        print("Dostava je 1200 din")
    elif city == "Novi Sad":
        print("Dostava je 700")
    elif city == "Split":
        print("Dostava je 1300")
    else:
        print("Grad ne postoji")


calculate_delivery("Subotica")
calculate_delivery("Beograd")
calculate_delivery("Zagreb")
calculate_delivery("New York")



hello_world()
search("Beograd", "dvoetazna")
search("Subotica", "troetazna")


def calculate(number1, number2):
    return number1+number2

# duplirajte rezultat
# ispisite poruku za dupliran rezultat
result = calculate(22, 44) # 66
print(result*2, f"Ukupan rezultat je {result}")

result2 = calculate(5, 10) # 15

print(result+result2)
