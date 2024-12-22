import json
import sys
from datetime import datetime

# 1. Budzet
# 2. Dodavanje troskova
# 3. brisanje troskova
# 4. Logovanje troskova

user = None
maximum_budget = 100000

with open('data/user.json', 'r') as file:
    user = json.load(file)

user_budget = user['budget']+user['credit']

if user_budget >= maximum_budget or user_budget <= 0:
    print("Desila se greska, vas budzet je veci od dozvoljenog ili je premali")
    sys.exit()

print(f"Dobar dan. Dobrodosli nazad, vas budzet iznosi {user_budget}")

expense = 0

while expense <= 0 or expense > user_budget:
    expense = int(input("Molim vas unesite iznos troska"))

with open("logs/expense_log.txt", "a") as file:
    remaining_budget = user_budget-expense
    message = (f"\nAmount: {expense}, "
               f"User: {user['id']}, "
               f"Budget: {user_budget}, "
               f"Preostali budzet: {remaining_budget} "
               f"Datetime: {datetime.now()}")
    file.write(message)

# Napraviti textualni fajl koji se zove "expense_log.txt"
# Upisati svaki trosak u sledecem formatu
# "Amount: CIFRA_EXPENSE, User: 1, DateTime: 21.08.2024 5:55:05, Budget: TRENUTNI_BUDZET, Preostali budget: PREOSTALI_BUDZET