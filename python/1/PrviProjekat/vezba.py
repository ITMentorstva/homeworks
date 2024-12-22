
program_name = "Bookstore"
version = 1.0
is_new_program = True

# list -> array, "Harry Potter 1", "LOTR collections"

#           0                  1                   2
books = ["Harry Potter 1", "LOTR Collection", "Harry Potter 2"]

# Ispisite prvu stavku iz liste

print(books[0])

# Kako da promenite prvu stavku iz liste "Harry Potter 1" -> "Pragmatic programmer"
# Kako da obrisem poslednju stavku iz liste?

books[0] = "Pragmatic programmer"
print(books)

books.remove("Harry Potter 2")
print(books)