

# Napisati petlju koja ispisuje brojeve od 0 do 100

# 5 / 2 = 2.5 = 2, 0.5
# 9 / 2 = 2x4.5 = 2x4, 1
# 10 / 2 = 5,5 = 0

# 444 / 2 = 2x222
# 411 / 2 = 205x2 (410), 1

# ako je ostatak 0, to znaci da je broj deljiv sa 2, paran
# ako je ostatak 1, to znaci da je broj neparan

# break za zaustavljanje petlje
# continue za preskakanje nekog nabrajanja

# Preskoci broj 10
# A kod treba da stane kod broja 44

for number in range(100):

    if number == 10:
        continue

    if number == 44:
        break

    if number%2 == 0:
        print(f"Broj je paran {number}")


# listu korisnika koji ima aktivnu clanarinu
# mi smo korisli continue kako ne bi ispisali sve korisnike koji nemaju clanarinu duze od 3 meseca

# Imali smo skripte koje su se pokretale -> VideoTestPlay, VideoTestStreamPlay, VideoTestStreamStop
# if test == "error":
#   break;













