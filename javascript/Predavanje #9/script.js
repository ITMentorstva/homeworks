
document.getElementById("buyButton").addEventListener('click', function() {

    var cena = document.getElementById("cenaProizvoda").getAttribute("data-cena");
    console.log("Cena ovog proizvoda je "+cena+" eura")
    console.log(`Cena ovog proizvoda je ${cena} eura`)

});

// 0, 1, 2, 3, 4, ... 100 = 0, 99
for(var i = 0; i < 100; i++) {
    document.getElementById("poruke").append(i)
}
//          0       1       2       3        4
// 0, 4 - ['dugme','dugme','dugme','dugme','dugme']
document.getElementsByClassName("dugme")[0].addEventListener("click", function() {
    console.log("test");
    this.style.color = "red"
});

document.getElementsByClassName("dugme")[1].addEventListener("click", function() {
    console.log("test");
    this.style.color = "red"
});





var brojButtona = document.getElementsByClassName('dugme').length;
console.log(brojButtona); 

// 0, 1, 2, 3, 4 
// i < 8, i < 10
for(var brojElemenata = 0; brojElemenata < brojButtona; brojElemenata++) {
    
    console.log(brojElemenata);
    document.getElementsByClassName("dugme")[brojElemenata].addEventListener('click', function() {
        this.style.color = "red"
    });

}

// 0 
// console.log

// 1 
// console.log

for(var broj = 0; broj < 100; broj++) {
    
    // 22 / 2 = 11, 11 - 0
    // 11 / 2 = 5, 5 - 1
    // 100 / 2 = 50, 50 - 0
    // 75 / 2 = 37, 37 - 1 = 37*2 = 74+1 = 75
    var ostatak = broj % 2;
    
    if(ostatak == 0) {
        console.log(broj)
    }

}