/**
 * Napraviti array sa objektima sa 8 automobila:
 *  {
 *      name: "Audi A4",
 *      price: 9999,
 *      image: "url do slike"
 *  }
 */

let cars = [
    {
        name: "Audi A4",
        price: 9999,
        image: "https://hips.hearstapps.com/hmg-prod/images/2025-bmw-m3-110-66562ddceaf59.jpg?crop=0.752xw:0.501xh;0.105xw,0.331xh&resize=1200:*",
        production_year: 2020
    },
    {
        name: "BMW 3 Series",
        price: 10999,
        image: "https://hips.hearstapps.com/hmg-prod/images/2025-bmw-m3-110-66562ddceaf59.jpg?crop=0.752xw:0.501xh;0.105xw,0.331xh&resize=1200:*",
        production_year: 2019
    },
    {
        name: "Mercedes-Benz C-Class",
        price: 11999,
        image: "https://hips.hearstapps.com/hmg-prod/images/2025-bmw-m3-110-66562ddceaf59.jpg?crop=0.752xw:0.501xh;0.105xw,0.331xh&resize=1200:*",
        production_year: 2021
    },
    {
        name: "Toyota Camry",
        price: 8999,
        image: "https://hips.hearstapps.com/hmg-prod/images/2025-bmw-m3-110-66562ddceaf59.jpg?crop=0.752xw:0.501xh;0.105xw,0.331xh&resize=1200:*",
        production_year: 2024
    },
    {
        name: "Honda Accord",
        price: 8499,
        image: "https://hips.hearstapps.com/hmg-prod/images/2025-bmw-m3-110-66562ddceaf59.jpg?crop=0.752xw:0.501xh;0.105xw,0.331xh&resize=1200:*",
        production_year: 2017
    },
    {
        name: "Ford Mustang",
        price: 12999,
        image: "https://hips.hearstapps.com/hmg-prod/images/2025-bmw-m3-110-66562ddceaf59.jpg?crop=0.752xw:0.501xh;0.105xw,0.331xh&resize=1200:*",
        production_year: 2022
    },
    {
        name: "Volkswagen Golf",
        price: 7999,
        image: "https://hips.hearstapps.com/hmg-prod/images/2025-bmw-m3-110-66562ddceaf59.jpg?crop=0.752xw:0.501xh;0.105xw,0.331xh&resize=1200:*",
        production_year: 2018
    },
    {
        name: "Tesla Model 3",
        price: 39999,
        image: "https://hips.hearstapps.com/hmg-prod/images/2025-bmw-m3-110-66562ddceaf59.jpg?crop=0.752xw:0.501xh;0.105xw,0.331xh&resize=1200:*",
        production_year: 2024
    },

    {
        name: "Zastava Yugo 45",
        price: 39999,
        image: "https://hips.hearstapps.com/hmg-prod/images/2025-bmw-m3-110-66562ddceaf59.jpg?crop=0.752xw:0.501xh;0.105xw,0.331xh&resize=1200:*",
        production_year: 2024
    }
];


/**
 * -> Napraviti petlju koja ce na stranici ispisati sve proizvode / automobile
 *
 */

// <div className="product">
//       <img>
//     <p>Audi A4 <span className="productPrice">2400</span></p>
// </div>

for(let car of cars) {

    let div = document.createElement("div");
    let image = document.createElement("img");
    image.src = car.image;

    let paragraph = document.createElement("p");
    paragraph.textContent = car.name;

    let span = document.createElement("span");
    span.textContent = car.price;

    paragraph.appendChild(span); // Dodaj na kraj paragrafa jos 1 HTML element

    div.appendChild(image);
    div.appendChild(paragraph);

    if(car.production_year === 2024) {
        let productionYearSpan = document.createElement("span");
        productionYearSpan.textContent = "NOVO!";
        productionYearSpan.classList = "productionYear";

        div.appendChild(productionYearSpan);
    }


    document.querySelector("#main").appendChild(div);
}