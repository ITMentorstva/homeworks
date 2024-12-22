

let name = "admin";
let password = "tajnaSifra";

if(name == "admin" && password == "tajnaSifra") {
    console.log("Vasi podaci su tacni");
}
else {
    console.log("Vasi podaci nisu tacni");
}

/**
 * Napraviti sledece variablu:
 *      -> userType = "admin"
 *          -> Uraditi proveru ako je userType admin ili moderator ispisati poruku:
 *              "Vi ste administrator" -> admin ili moderator - userType
 *          -> Ako nije onda ispisati poruku
 *              "Vi ste obican clan"
 */

let userType = "moderator";

if(userType == "admin" || userType == "moderator") {
    console.log("Vi ste administrator");
}
else {
    console.log("Vi ste obican clan");
}

let allowedTypes = ["admin", "moderator"]; // (array) allowedTypes

// Da li "userType" postoji unutar "allowedTypes"
// Hint: "includes"

let typeCheck = allowedTypes.includes(userType); // allowedTypes.includes("moderator");

if(typeCheck) { // if(ifCheck == true)
    console.log("2. Vi ste administrator");
}
else {
    console.log("Vi niste administrator");
}

/**
 * Napraviti varijablu "dayOfTheWeek" let dayOfTheWeek = "ponedeljak", uraditi proveru da li je dan
 *  -> subota ili nedelja: ako jeste, ispisati "Weekend!"
 *  -> ako je petak ispisati "Weekend is coming!"
 *  -> AKo je bilo koji drugi dan ispisati "Work work..."
 */

// Switch

let dayOfTheWeek = "nedelja";

if(dayOfTheWeek == "subota" || dayOfTheWeek == "nedelja") {
    console.log("Weekend!");
}
else if(dayOfTheWeek == "petak") {
    console.log("Weekend is coming");
}
else {
    console.log("Work work!");
}

switch(dayOfTheWeek) {
    case "nedelja":
    case "subota":
        console.log("Weekend");
        break;
    case "petak":
        console.log("Weekend is coming!");
        break;
    default:
        console.log("Work work!");
        break;
}