from Models.User import User
from Models.Car import Car

# Prebaciti svu logiku da koristi MySQL
# Dodati rentiranje automobila (do kada)
# Prilikom ispisivanja rentiranih vozila, ispisati pored do kada je rentiran (npr: jos 5 dana)
    # Ako je manje od 1 dana, onda ispisati u satima npr jos 10 sati

# 1. Dodaj korisnika
# Pomocu klas atributa

# 2. Prikazi korisnike


# 3. Prikazi raspoloziva vozila
# 4. Prikazi rentirana vozila

print("Opcije: "
      "\n1. Dodaj korisnika"
      "\n2. Prikazi korisnike"
      "\n3. Prikazi raspoloziva vozila"
      "\n4. Prikazi rentirana vozila")

available_options = [1, 2, 3, 4]

option = None

while option is None:

    option = input("Unesite opciju koju zelite\n")
    option = int(option)

    if option not in available_options:
        raise ValueError("Nepoznata opcija")

    if option == 1:
        user = User()
        user.name = input("Enter users name")
        user.age = int(input("Enter users age"))
        user.create()
        option = None

    elif option == 2:
        print(User.ALL_USERS)
        option = None

    elif option == 3 or option == 4:
        for brand in Car.VALID_CARS:
            for car in Car.VALID_CARS[brand]:
                if not car['rented'] and option == 3:
                    print(car)
                elif car['rented'] and option == 4:
                    print(car)
