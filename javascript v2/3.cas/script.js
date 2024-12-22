
// IFovi, uslovi ili conditional statements

let proizvod = "hleb";
let cena = 99;

// Ako je hleb 99 dinara da ispise "hleb je skup", ako je manje "hleb je jeftin"

/**
 * if -> govorimo kodu da radimo poredjenje
 * () -> pisemo nas uslov -> da li je hleb 99 dinara
 * {} -> sta treba da se desi -> ispisati "hleb je skup"
 *
 * = -> dodelimo vrednost / postavimo vrednost => proizvod = "hleb";
 * == === => poredimo vrednosti
 */

if(cena == 99)
{
    console.log("Hleb je skup");
}

// proverite da li je proizvod "hleb" ako jeste ispisite "Nasli smo hleb"
if(proizvod == "hleb")
{
    console.log("Nasli smo hleb!");
}


let automobil = "audi";
// Ako je BMW ispisati M3, a ako nije ispisati "Nije BMW"

if(automobil == "bmw")
{
    console.log("M3!");
}
else
{
    console.log("Nije BMW");
}

/**
 * Vezba
 * - Napravite novi fajl "vezba.js"
 * -> Napravite varijablu "content"
 *      -> stavite da je vrednost te varijable "video"
 *  -> Napisati porednjenje:
 *      -> Ako je vrednost "video" -> Ispisati link do nekog videa na YouTube
 *      -> Ako je vrednost "image" -> Ubaciti link do neke slike sa googla
 */