
import re


# Da li se ovde nalaze samo brojevi
ourNumbers = "12345"

# r (malo slovo r) predstavlja da mi trazimo i tretiramo ceo string kao obican text
#   \ escape character

# r - sve sto proveravam tretiraj kao obican text
# ^ - trazimo od pocetka stringa
# \d - trazi samo brojeve (0-9) - matches any numbers from 0 to 9
# + nastavlja dalje
# $ kraj stringa

# Proveri da li su samo brojevi unutar necega
pattern = r"^\d+$"

# Proveri da li postoji taj pattern (sablon) unutar stringa (ourNumbers)
if re.match(pattern, ourNumbers):
    print("samo brojevi")
else:
    print("Nisu samo brojevi")


# regEx koji ce proveravati da li imamo samo slova unutar stringa

sentence = "I love python"

# Character class: [a-z]
letterPattern = r"^[a-zA-Z ]+$"

if re.match(letterPattern, sentence):
    print("Only letters")
else:
    print("Not letters")

# da li recenica pocinje velikim slovom
importantSentence = "Today will rain"

capitalPattern = r"^[A-Z]"

if re.match(capitalPattern, importantSentence):
    print("Has capital letter")



phone_number = "38160555333"

# 381, 382, 385, 389
# 381 serbia, 382 montenegro, 385 bosnia and Herzegovina, 389 croatia
phone_pattern = r"^38(1|2|5|9)"

phone_match = re.match(phone_pattern, phone_number)

phone_map = {
    "381": "Serbia",
    "382": "Montenegro",
    "385": "Bosnia and Herzegovina",
    "389": "Croatia"
}


if phone_match:
    prefix = "38"+phone_match.group(1) # 1,2,5,9 = 381, 382, 385, 389
    country = phone_map[prefix]
    print(f"Prefix number is {prefix} and matching country is {country}")
