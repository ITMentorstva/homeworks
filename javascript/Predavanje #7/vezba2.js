var boja = prompt("Unesite zeljenu boju").toLowerCase(); // Plava
var dugme = document.getElementById("dugme");

if (boja == "plava") {
	dugme.style.backgroundColor = "blue"; // document.getElementById("dugme").style.backgroundColor = "blue"
} else if (boja == "crvena") {
	dugme.style.backgroundColor = "red";
} else {
	dugme.style.backgroundColor = "green";
}

var bojaTeksta = prompt("Unesite boju teksta").toLowerCase(); // cRvEnA - crvena

if (bojaTeksta == "plava") {
	dugme.style.color = "blue";
} else if (bojaTeksta == "crvena") {
	dugme.style.color = "red";
}

var visina = prompt("Unesite visinu dugmeta").toLowerCase();
if (visina > 50) {
	dugme.style.height = visina + "px";
}

var sirina = prompt("Unesite sirinu dugmeta").toLowerCase();
if (sirina > 50) {
	dugme.style.width = sirina + "px";
}
