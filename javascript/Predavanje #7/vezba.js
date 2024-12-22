var ime = prompt("Unesite vase ime");

console.log(ime); // tOma
ime = ime.toLowerCase();
console.log(ime); // toma

if (ime == "toma") {
	// Ako je toma, ispisi "Dobrodosli"
	console.log("Dobrodosli");
} else if (ime == "petar") {
	// Ako je petar, ispisi "Dobrodosao Petre"
	console.log("Dobrodosao Petre!");
} else {
	// Ako je bilo sta drugo (npr: Katarina, Mladen, Nikola, 55), ispisi "Uneli ste pogresno ime"
	console.log("Uneli ste pogresno ime");
}
