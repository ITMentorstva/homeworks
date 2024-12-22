$(document).ready(function() {

    $(".dodajUKorpu").click(function() {
        var cena = $(this).attr('data-price');

        var trenutnaKorpa = localStorage.getItem("korpa");

        if(trenutnaKorpa != null) { // ako korpa nije prazna (nije null)
            ukupnoKorpa = parseInt(trenutnaKorpa)+parseInt(cena); // localStorage + cena = 15.600 + 4600 = 20.200
            // "15600" + "4600" = "156004600"
            // parseInt = string - integer, "15600" - 15600
        } else {
            ukupnoKorpa = cena; // null, 4600
        }

        localStorage.setItem("korpa", ukupnoKorpa);
    });


});