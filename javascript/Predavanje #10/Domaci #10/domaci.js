
document.getElementById("buyButton").addEventListener('click', function() {
    var cena = this.getAttribute('data-price');
    cenaPDV(cena);
});

function cenaPDV(cena) {
    var procenat = cena*0.18;
    var totalnaCena = parseInt(cena)+procenat;
    console.log(totalnaCena, cena, procenat);
    alert("Cena ovog proizvoda sa PDV-om je "+totalnaCena);
 } 