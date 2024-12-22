
var gradovi = [
    {
        ime: "Beograd",
        temperatura: -2,
        padavine: "sneg", // sneg, kisa, bez padavina
    },
    {
        ime: "Subotica",
        temperatura: -4,
        padavine: "bez padavina"
    }
];

for(var grad in gradovi) {    

    var prognoza = gradovi[grad]; // prognoza['ime'], gradovi[grad]['ime']
    
    var paragraf = document.createElement("p"); // <p></p>
    var paragrafText = document.createTextNode(prognoza['ime']+ " "+prognoza['temperatura'] + " "+prognoza['padavine']) // Beograd -2 sneg

    paragraf.append(paragrafText); // <p></p> + Beograd -2 sneg = <p>Beograd -2 sneg</p>

    // <div></div> + <p>Beograd -2 sneg</p> = <div><p>Beograd -2 sneg</p></div>
    document.getElementById("prognoza").append(paragraf);
}