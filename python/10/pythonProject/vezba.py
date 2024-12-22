
# iz methods.py ucitaj funkciju load_file
from methods import load_file


products = load_file("data/products.json")
users = load_file("data/user.json")
print(products, users)