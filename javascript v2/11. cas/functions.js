/**
 * Functions -> Methods
 *  Methods: array.find(), console.log()
 * Funkcije i metode
 *
 *
 * function -> kada kreiramo / pravimo funkciju
 * imeFunkcije -> Ista pravila kao za varijable (!@%^@#,.12313213)
 * () -> funkcije bez argumenata
 * (ime, prezime) funkcije sa argumentima
 * return -> za sada zanemarite
 * Svaka funkcija (kao i if) mora imati svoje zagrade {}
 *  -> Unutar {} se nalazi kod koji ce se izvrsiti
 */

function sayHello()
{
    console.log("Hello!");
}

sayHello();
sayHello();
sayHello();

/**
 * Napraviti funkciju online -> funkcjia treba da ispise poruku "Sajt je online!"
 */
function online()
{
    console.log("Sajt je online!");
}

online();


// isAdult -> da li osoba ima 18 godina -> ako ima "Adult" = Ako nema "Not adult"
// isFree, isAdult, isCar, isHuman => Da li nesto je tacno ili ne -> IS
// ako ta funkcija setuje setMoney, setName, setLastName => prefix sa set
// getMoney, getName -> prefix GET

// if is adult toma? Set money 5000
// if(isAdult(toma)) {
//     setMoney(5000);
// }
//
// // age check toma? money 5000
// if(ageCheck(toma)) {
//     money(5000);
// }


function isAdult(age)
{
    if(age >= 18) {
        console.log("Adult");
    } else {
        console.log("Not adult");
    }
}

let toma = 31;

isAdult(15); // Not adult
isAdult(18); // Adult
isAdult(toma); // Adult => isAdult(31)

function writeFullName(firstName, lastName)
{
    console.log(firstName+" "+lastName);
}

writeFullName("Tomislav", "Nikolic");