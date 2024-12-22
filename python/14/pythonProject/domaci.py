import re

# da li je email

email = "toma@gmail.com"

# proveri neki pre @ (slova . -)
# \w provaravamo da li postoje slova
# \.- proveravamo da li imamo . ili crticu


# Proveri da li sadrzi [\w\.-] (slova ili . ili -)
# Posle toga da li sadrzi @
# \. proveravmo da li postoji "." tacka
# \w

# [\w\.-]   -> toma
# +@        -> @
# [\w\.-]   -> gmail
# \.        -> .
# \w        -> com



email_pattern = r"^[\w\.-]+@[\w\.-]+\.\w+$"

if re.match(email_pattern, email):
    print("It is email")