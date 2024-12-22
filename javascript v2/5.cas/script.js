/**
 * Vezba 1:
 */

let name = "ADMIN";

name = name.toLowerCase(); // ADMIN -> admin, ADmin -> admin
console.log(name);

// let name = "admin"     if(name == "admin")
// aDmIn -> admin
// ADMIN -> admin

if(name == "admin") {
    console.log("Pozdrav admine!");
} else {
    console.log("Vi niste administrator");
}


/**
 * Ako korisnikovo ime pocinje slovom "a" ispisati "ime pocinje samoglasnikom"
 * name = "admin" -> ["a", "d", "m", "i", "n"]
 * name[0]
 */
if(name[0] == "a") {
    console.log("Vase ime pocinje samoglasnikom");
}

/**
 * Proveriti da li je prvo slovo samoglasnik -> a, e, i, o, u
 * "ime pocinje nekim samoglasnikom"
 */
let samoglasnici = ["a", "e", "i", "o", "u"];

if(samoglasnici.includes(name[0])) {
    console.log("ime pocinje nekim samoglasnikom");
}


let number = 2;
if(number === 2) {
    console.log("broj je 2");
} else {
    console.log("broj nije 2");
}









