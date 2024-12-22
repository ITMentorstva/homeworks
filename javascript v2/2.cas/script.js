
//              0: hleb, 1: mleko, 2: jogurt
let products = ["hleb", "mleko", "jogurt"];
console.log(products);

// 0: hleb, 1: mleko, 2: jogurt, 3: novine
products.push("novine");
console.log(products);

products.splice(0, 1);
console.log(products);


let cars = ["BMW", "Audi", "Mercedes"];
console.log(cars);
cars[0] = "Zastava";
console.log(cars);

cars.sort();
console.log(cars);


let personalID = {
    name: "Tomislav",
    lastName: "Nikolic",
    dateOfBirth: "09/05/1993",
    hobbies: ["programming", "teaching", "fishing"]
};

console.log(personalID.name, personalID.dateOfBirth);

// height: 181.5
personalID.height = 181.5;
console.log(personalID, personalID['name'], personalID.name);

console.log(personalID.hobbies[2]);

// "sentence" -> "NAME has gone HOBBY" -> "Toma has gone fishing" -> "Toma has gone teaching"
let sentence = personalID.name+" has gone "+personalID.hobbies[2];
console.log(sentence);


/**
 * shop:
 *  -> name, products (lista), openingHours (vreme kada se otvara), closingHours (vreme kada se zatvara)
 */