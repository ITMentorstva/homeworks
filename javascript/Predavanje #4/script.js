var naslov = "Prodaja auto delova";

// document.getElementById("naslov").innerHTML = "Hello world!";
document.getElementById("naslov").innerHTML = naslov;

document.getElementById("naslov2").innerHTML = naslov;

document.getElementById("knjige").innerHTML =
	"<p>Hari poter - kamen mudrosti</p>";
document.getElementById("knjige").innerHTML += "<p>Hari poter 2</p>"; // trenutnaVrednost + novaVredost. "Hari poter - kamen mudrosti" + "Hari poter 2"

var ime = "Toma";
var prezime = "Nikolic";
var godine = 29;

console.log(ime + prezime + godine); // "Toma" + "Nikolic"

// Ja se zovem Toma
// a prezivam se Nikolic
var recenica = "Ja se zovem " + ime + " a prezivam se " + prezime; // Ja se zovem Toma a prezivam se Nikolic

document.getElementById("ime").innerHTML = recenica;
