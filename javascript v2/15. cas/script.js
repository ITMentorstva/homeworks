/**
 * Ajax, Axios, Fetch, postReq, XHR...
 *
 * FETCH
 *
 * CORS
 *  Cross Origin Resource Sharing
 *      => Izvor (Origin) - odakle pozivamo API
 *  Live Server
 *
 *
 *  -> Idi na dummyjson.com/test
 *  -> Uzmi odgovor
 *  -> Prikazi odgovor
 *  Asinhrono (Async)
 *
 *  Promise -> Garancija da cete dobiti odgovor
 *      Kada?
 *      Sta ce biti odgovor?
 *      Da li dolazi do greske?
 *
 * Pozovi https://dummyjson.com/test
 *  -> Promise: Obecavam ti da ces nekad dobiti odgovor
 *  -> Kod nastavlja da se izvrsava
 *
 * -> Pozovi DummyJson API:
 *      -> Obecavam ti da cu ti dati odgovor
 *
 * -> Nastavlja kod
 *
 * MojaGaraza.rs
 *  -> API od OTP banke (30 timeout)
 *  -> OTP Banka ne radi
 */

let productsHolder = document.getElementById("products");
let searchProduct = document.getElementById("searchProduct");

// API vraca 20 podataka, sortirani po ceni od najvise ka najnizoj
// ASC i DESC (Ascending, Descending)


searchProduct.addEventListener("click", function() {

    let searchText = document.getElementById("searchText");
    let searchLink = 'https://dummyjson.com/products/search?q='+searchText.value;

    fetch(searchLink)
        .then(response => response.json())
        .then(function(data) {
            productsHolder.innerHTML = "";
            for(let product of data.products) {
                appendProductToHolder(product);
            }
        })

});

// .then(response => response.json())
//
// .then(function(response) {
//     return response.json();
// })


fetch('https://dummyjson.com/products?limit=20&sortBy=price&order=desc')
    .then(response => response.json())
    .then(function(data) {

        for(let product of data.products) {
            appendProductToHolder(product);
        }

    })

function appendProductToHolder(product) {
    let singleProduct = document.createElement("div");

    let productTitle = document.createElement("h1");
    productTitle.innerText = product.title;

    let productCategory = document.createElement("p");
    productCategory.innerText = product.category;

    let productPrice = document.createElement("p");
    productPrice.innerText = product.price;


    singleProduct.append(productTitle, productCategory, productPrice);

    productsHolder.append(singleProduct);
}
