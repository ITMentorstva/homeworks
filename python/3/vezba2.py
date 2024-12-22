
name = "TOma"
name = name.lower() # "ToMa" -> "toma"

# ako je ime admin              -> if
# ako je ime toma               -> elseif (elif)
# ako je bilo koje drugo ime    -> else

# name = "Toma" == "toma" -> name = "toma" == "toma"
if name == "admin":
    print("Dobrodosao admine")
elif name == "toma":
    print("Dobrodosao tomo")
else:
    print("Dobrodosao neko drugi")