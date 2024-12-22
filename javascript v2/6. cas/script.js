/**
 * for in
 * break
 * HTML :)
 */

// ZA REFRESH: CTRL + SHIFT + R = Cache refresh

let products = ["bread", "mleko", "jogurt"];

for (let i = 0; i < products.length; i++) {
    console.log(products[i]);
}

// let i in products === let i = 0; i < products.length; i++


// forIn
for (let i in products) {
    console.log(products[i]);
}

let korpa = [
    {
        name: "Hleb",
        cena: 99,
        amount: 1
    },
    {
        name: "Luk",
        cena: 150,
        amount: 3
    },
    {
        name: "Mleko",
        cena: 250,
        amount: 1
    }
];

/**
 * Kako da ispisem koliko kosta prvi proizvod (hleb) -> CONSOLE.LOG() -> 5
 *  1 -> Gde su mi podaci?    korpa -> CONSOLE.LOG()
 *  1 -> Kako da izvucem prvi podatak iz niza? korpa[0] -> CONSOLE.LOG()
 *  1    -> Sta sam ja dobio iz korpa[0]? Koju vrstu podatka? -> CONSOLE.LOG()
 *  1        -> objekat -> CONSOLE.LOG()
 *              -> Sta taj objekat sadrzi ? { name: 'Hleb', price: 99, amount: 1 } -> CONSOLE.LOG()
 *  1                -> Sta meni treba iz tog objekta? price -> CONSOLE.LOG()
 */

// console.log(korpa[0]['price']);

// Pomocu petlje, ispisati cene svi proizvoda --- 99, 150, 250

/**
 * Koju petlju koristiti? forIn
 *  -> 1. Kako da napisem petlju? I koju? ---- ForIn
 *  -> 2. Kako uopste da ispisem svaki proizvod? --- korpa[proizvod]
 *  -> 3. Kako da ispisem samo cenu za odredjeni proizvod?? korpa[proizvod]['price']
 */

for (let proizvod in korpa) {

// Ako je cena proizvoda veca od 200, zaustaviti petlju :)
    /**
     * Kako proveriti cenu proizvoda? - da li je veca od 200
     * Kako prekinuti petlju?
     */

    let productPrice = korpa[proizvod]['cena'];

    if (productPrice > 200) {
        break;
    }

    console.log(productPrice);
}