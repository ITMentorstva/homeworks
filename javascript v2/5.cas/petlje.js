/**
 *
 */

let cars = [
    "Toyota",
    "Honda",
    "Ford",
    "Chevrolet",
    "Nissan",
    "BMW",
    "Mercedes-Benz",
    "Audi", // continue
    "Volkswagen",
    "Hyundai",
    "Kia",
    "Lexus",
    "Subaru",
    "Mazda",
    "Jeep",
    "Tesla",
    "Volvo",
    "Porsche",
    "Fiat",
    "Mitsubishi",
    "Chrysler",
    "Buick",
    "Cadillac",
    "Acura",
    "Infiniti",
    "Lincoln",
    "Land Rover",
    "Jaguar",
    "Dodge",
    "Ram",
    "GMC",
    "Mini",
    "Smart",
    "Aston Martin",
    "Ferrari",
    "Maserati",
    "Bentley",
    "Lamborghini",
    "Rolls-Royce",
    "Bugatti",
    "Alfa Romeo",
    "McLaren",
    "Lotus",
    "Koenigsegg",
    "Pagani",
    "Genesis",
    "Suzuki",
    "Isuzu",
    "Citroën",
    "Peugeot"
];

for(let i = 0; i < cars.length; i++) {

    // Domaci: Ako ime automobila pocinje slovom "a", ne ispisati ga

    // Da li podaci moraju da se normalizuju? Da - "A", "a"
    // Kako da dodjemo do prvog slova? cars[i][0]

    let firstLetter = cars[i][0].toLowerCase();

    if(firstLetter === "a") {
        continue;
    }

    console.log(cars[i])
}

// Sledece predavanje:
// for in -> Morate znati
// break;
// Rad sa HTML


// forEach -> Morate znati

// while
// do while
// for of