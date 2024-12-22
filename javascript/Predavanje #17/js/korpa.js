$(document).ready(function() {
    var korpa = localStorage.getItem("korpa");

    if(korpa == null) {
        $("#korpa").html("Nemate proizvoda u korpi");
    } else {
        $("#korpa").html(korpa);
    }

    $("#isprazniKorpu").click(function() {
        localStorage.removeItem("korpa");
        $("#korpa").html("Nemate proizvoda u korpi");
    });

});