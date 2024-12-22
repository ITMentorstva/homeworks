var komponente = ["Maticna ploca", "ram memorija", "graficka karta"];

for (var jednaKomponenta in komponente) {
	document.getElementById("vezba").innerHTML +=
		"<p>" + komponente[jednaKomponenta] + "</p>";
	// <p> komponenta </p>
}

// Ispisivanje podataka u HTML-u
document.getElementById("listaKomponenata").innerHTML = "Pozdrav!";
document.getElementById("listaKomponenata").innerHTML += "Toma"; // Pozdrav! + Toma
