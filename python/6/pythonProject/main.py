

# Array (listu) 5 studenata:
# Svaki student: name "Toma", score: 0-100, active: true/false -> dictionary

students = [
    {
        "name": "Toma",
        "score": 99,
        "active": True
    },
    {
        "name": "Marija",
        "score": 49,
        "active": True
    },
    {
        "name": "Milos",
        "score": 85,
        "active": False
    }
]

# Napisati petlju koja ispisuje samo ucenike koji su aktivni:
# HINT: for, if

# Ako je score studenta (ovo vazi SAMO za aktivne studente)
# od 80 do 100 -> "grade": "A"
# od 60 do 80 -> "grade": "B"
# od 40 do 60 -> "grade": "C"
# od 20 do 40 -> "grade": "D"
# od < 20  -> "grade": "F"

for student in students:

    if not student['active']:
        continue

    if student['score'] >= 80:
        student['grade'] = "A"
    elif student['score'] < 80 and student['score'] >= 60:
        student['grade'] = "B"
    elif student['score'] < 60 and student['score'] >= 40:
        student['grade'] = "C"
    elif student['score'] < 40 and student['score'] >= 20:
        student['grade'] = "D"
    else:
        student['grade'] = "F"


print(students)