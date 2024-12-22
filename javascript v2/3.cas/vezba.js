
let content = "site";

if(content == "video")
{
    console.log("https://www.youtube.com/watch?v=8zCW8pm1aGw");
}
else if(content == "site")
{
    console.log("itmentorstva.com")
}
else if(content == "music")
{
    console.log("audacity");
}
else
{
    console.log("https://www.nippon.com/en/ncommon/contents/japan-topics/2524215/2524215.jpg");
}


let cena = 500;


// Da li je manje od 500 ili je 500
if(cena <= 500)
{
    console.log("Jeftino je");
}
else if(cena > 500)
{
    console.log("Skupo je");
}


let component = "tastatura";
let price = 40;

// da li je komponenta tastatura i da li je price 50
if(component == "tastatura" && price == 50)
{
    console.log("Uspesno testiranje!");
}
else
{
    console.log("Neuspesno testiranje");
}

/**
 * Domaci:
 *  -> Novi fajl domaci.js
 *      -> Napraviti 2 varijable
 *          name, password
 *              name vrednost je "admin"
 *              password vrednost je "tajnasifra"

 *       -> Napraviti sledece porednjenje
 *          -> Ako je name "admin" i ako je sifra "tajnaSifra"
 *              -> Ispisati "Dobrodosli nazad"
*            -> Ako je name "toma" i ako je sifra "tajnaSifra"
 *              -> Ispisati "Dobrodosao Tomo"
 *            -> Ako nije nista od ponudjenih
 *              -> Ispisati "Pogresna lozinka ili ime"
 */