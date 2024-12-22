# Sort, BubbleSort, Factorial Calculation


# Linear Search
# Nadji najveci broj u listi

numbers = [3, 5, 2, 12, 8, 1]

# Neka nam maximalni broj po defaultu bude prvi broj
max_number = numbers[0]

# Predji preko svih brojeva, ako je trenutni maximalni
# manji od broja iz petlje
# onda je taj iz petlje maximalni

for number in numbers:
    if number > max_number:
        max_number = number

# Vezba: Pronaci broj 8
for number in numbers:
    if number == 8:
        print("Nasli smo broj 8")
        break

# Nadji koliko puta se ponavlja 8
# Nadji koliko puta se nesto ponavlja iz array
# Proveri duplikate