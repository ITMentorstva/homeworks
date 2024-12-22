
// Beograd -2 = Beograd, -2 = "Beograd -2" = ["Beograd", -2]
// Beograd -2 = split(" ") = ["Beograd", -2]
var gradovi = [];

document.getElementById("dodajGrad").addEventListener("click", function() {

    var grad = prompt("Unesite ime grada"); // ["Unesite", "ime", "grada"]
    grad = grad.split(" "); // Beograd -2 = ["Beograd", -2], " "
    //                                          0        1

    var privremeniGrad = {
        ime: grad[0],
        temperatura: grad[1]
    };

    gradovi.push(privremeniGrad); // gradovi = [], gradovi = ["Beograd"], gradovi = ["Beograd", "Sarajevo"]
});


document.getElementById("prikaziTopleGradove").addEventListener("click", function() {
    
    document.getElementById("topliGradovi").innerHTML = "";

    for(var grad in gradovi) {
        if(gradovi[grad]['temperatura'] >= 12){
            document.getElementById("topliGradovi").innerHTML += gradovi[grad]['ime'] + gradovi[grad]['temperatura']
        }
    }
});


document.getElementById("prikaziHladneGradove").addEventListener("click", function() {
    
    document.getElementById("hladniGradovi").innerHTML = "";

    for(var grad in gradovi) {
        if(gradovi[grad]['temperatura'] < 12){
            document.getElementById("hladniGradovi").innerHTML += gradovi[grad]['ime'] + gradovi[grad]['temperatura']
        }
    }
});

