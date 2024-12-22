document.getElementById("contentHolder").innerHTML = "<p>Test 123</p>";

var prviParagraf = document.createElement("p");
prviParagraf.innerHTML = "Prvi JS paragraf";
prviParagraf.style.color = "red";

document.getElementById("contentHolder").appendChild(prviParagraf);

var linkDoGoogla = document.createElement("a"); // h1, h5, h2, img, center...
linkDoGoogla.setAttribute("href", "https://google.com");
linkDoGoogla.innerHTML = "Klikni da odes na google";
linkDoGoogla.style.color = "red";

document.getElementById("contentHolder").appendChild(linkDoGoogla);

var slika = document.createElement("img");
slika.setAttribute(
	"src",
	"https://cdn-1.motorsport.com/images/amp/2wBVPze0/s1000/carlos-sainz-ferrari-f1-75-1.jpg"
);

slika.setAttribute("alt", "F1 motorsport");
// slika.setAttribute("class", "slika border");
slika.classList.add("slika");
slika.classList.add("border");

document.getElementById("contentHolder").appendChild(slika);

function test() {
	document.getElementById("test").style.color = "red";
}
