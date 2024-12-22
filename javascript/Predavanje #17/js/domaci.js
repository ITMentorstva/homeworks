$(document).ready(function() {


    var grad = localStorage.getItem("grad");
    if(grad != null) {
        $("#cities").val(grad);
        getWeatherForCity(grad);
    }


    $("#cities").change(function() {
        var city = $(this).val();
        getWeatherForCity(city);
        localStorage.setItem("grad", city);
    });

    function getWeatherForCity(city) {
        $.ajax({
            method: "GET",
            url: "http://api.weatherapi.com/v1/current.json",
            data: {
                key: "-",
                q: city,
                aqi: "yes"
            },
            success: function(response) {
                $("#weather").html("");
                $("#weather").append("Grad: "+city);
                $("#weather").append(", Temperatura: "+response.current.temp_c);
            }
        });
    }

});