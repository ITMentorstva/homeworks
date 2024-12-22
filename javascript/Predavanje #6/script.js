var proizvodi = ["Audi", "Mercedes", "BMW"];

//              0             1                2
console.log(proizvodi[0], proizvodi[1], proizvodi[2]);

// for, foreach, while
for (var jedanProizvod in proizvodi) {
	console.log(jedanProizvod, proizvodi[jedanProizvod]); // proizvodi[0], proizvodi[1]
}

// Testiranje
var broj1 = 1;
console.log(proizvodi[broj1]); // proizvodi[1]

// var proizvod = 0;
// proizvodi[proizvod];

// var proizvod = 1;
// proizvodi[proizvod];

// var proizvod = 2;
// proizvodi[proizvod];
