var prognoza = {
	Beograd: 30,
	"Novi Sad": 25,
	Subotica: 27,
};

document.getElementById("prognozaPoGradovima").innerHTML =
	"Beograd: " + prognoza["Beograd"] + "</p>";

document.getElementById("prognozaPoGradovima").innerHTML +=
	"<p>Novi Sad: " + prognoza["Novi Sad"] + "</p>";

document.getElementById("prognozaPoGradovima").innerHTML +=
	"Subotica: " + prognoza["Subotica"] + "</p>";
