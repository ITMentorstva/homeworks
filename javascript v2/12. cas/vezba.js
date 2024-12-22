

let cars = ['Audi', 'BMW', 'Mercedes'];

// Napraviti funkciju koja se zove checkCar
// Proslediti 2 stvari: listu automobila, automobil koji trazite

// Ako uspesno pronadje automobil koji zelite u listi vratiti true
// Ako ne pronadje vratiti false

function checkCar(carList, carName)
{
    for(let name of carList)
    {
        if(name.toLowerCase() === carName.toLowerCase())
        {
            return true;
        }
    }
    return false;
}

let result = checkCar(cars, "bmw");
console.log(result)

let result2 = cars.includes("BMW");
console.log(result2);