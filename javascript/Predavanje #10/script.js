

document.getElementById("buttonBorder").addEventListener('click', kadaSeKlikneNaDugme);
document.getElementById("dugme2").addEventListener('click', kadaSeKlikneNaDugme);

function kadaSeKlikneNaDugme() {
    this.style.border = "2px double red";
}

function pozdraviKorisnika() {
    var ime = prompt("Unesite vase ime");
    alert(ime);
}

function sracunaj(broj1, broj2) {
    console.log(broj1+broj2);
}

sracunaj(10, 20);
sracunaj(55, 33);

function pomnoziBrojeve(broj1, broj2) {
    console.log(broj1*broj2)
}

pomnoziBrojeve(55, 22);


function proveraPunoletstva(godine) {
    if(godine < 18) {
        console.log("Niste punoletni");
    } else {
        console.log("Punoletni ste");
    }
}

proveraPunoletstva(22);
proveraPunoletstva(10);


function podeliBrojeve(broj, delilac) {

    if(delilac == 0) {
        console.log("Ne mozete deliti sa 0");
    } else {
        console.log(broj / delilac);
    }

}



podeliBrojeve(55, 0);
podeliBrojeve(22, 3);

var nekiBroj = prompt("Unesite neki broj");
var nekiDelilac = prompt("Unesite delilca");

podeliBrojeve(nekiBroj, nekiDelilac);
podeliBrojeve(55, 2);

