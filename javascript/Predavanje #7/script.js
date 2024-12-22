var godine = prompt("Koliko godina imate?");

// Ako ima preko 18 godina, "Punoletni ste, dobrodosli"
// Morate biti punoletni da vidite sadrzaj

//    29   == 18
if (godine >= 18) {
	// 18, 19... > 19, 20..
	console.log("Punoletni ste, dobrodosli");
} else {
	console.log("Morate biti punoletni da vidite sadrzaj");
}
