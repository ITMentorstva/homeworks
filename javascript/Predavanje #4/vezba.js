var proizvodi = ["hleb", "mleko", "jogurt"];

document.getElementById("proizvodi").innerHTML =
	"<p style='color: red'>" + proizvodi[0] + "</p>";

document.getElementById("proizvodi").innerHTML +=
	"<p style='color: blue'>" + proizvodi[1] + "</p>";
document.getElementById("proizvodi").innerHTML +=
	"<p style='color: green'>" + proizvodi[2] + "</p>";
