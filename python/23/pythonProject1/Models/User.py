# Uraditi validaciju da li je korisnik uneo FIRST_NAME LAST_NAME

class User():
    ALL_USERS = []

    def __init__(self):
        super().__init__()
        self.__age = None
        self.__name = None

    @property
    def age(self):
        return self.__age

    @age.setter
    def age(self, age):
        if age < 18:
            raise ValueError("Godine moraju biti minimum 18")

        self.__age = age

    @property
    def name(self):
        return self.__name

    @name.setter
    def name(self, newName):
        split_name = newName.split()

        if len(split_name) < 2:
            raise ValueError("Name must be in format first last name")

        self.__name = newName

    def create(self):
        if self.__name is None or self.__age is None:
            raise ValueError("Name or age are not set")

        User.ALL_USERS.append([self.__name, self.__age])
