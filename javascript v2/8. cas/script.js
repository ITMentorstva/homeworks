/**
 * - querySelector  -> "#name", ".name" -> Vraca 1 element
 * - querySelectorAll -> "#name", ".name" -> Vraca array sa elementima
 * querySelector("#nekiId")
 * querySelector(".nekaKlasa") -> 1 element
 * querySelectorAll(".nekaKlasa") -> Sve elemente
 *
 *
 * getElementById -> Selektujete samo sa ID-em
 * getElementByClassName -> Selektujete samo sa Classom
 */

document.querySelector("#title").style.color = "red";

document.querySelector(".subtitle").style.color = "green";
document.getElementsByClassName("subtitle2")[0].style.color = "blue";

/**
 * Pomocu querySelectorAll selektovati i obojiti sve paragrafe koji imaju klasu "product"
 */

let products = document.querySelectorAll(".product");

for(let product of products) {
    product.style.color = "#484848";
}

/**
 * -> Promeniti da postojeca petlja menja boju u tamno sivo
 * -> Ako je cena proizvoda 5000 ili vise, obojiti cenu u crveno
 * -> Ako je manje obojiti cenu u zeleno
 */

let productPrices = document.querySelectorAll(".productPrice");

for(let price of productPrices) {

    if(price.textContent >= 5000) {
        price.style.color = "red";
    }
    else {
        price.style.color = "green";
    }


}