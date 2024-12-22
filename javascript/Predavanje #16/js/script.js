$(document).ready(function() {

    $("#grad").change(function() {
        
        var grad = $(this).val();
        console.log(grad)


        $.ajax({
            method: "GET",
            url: "http://api.weatherapi.com/v1/current.json",
            data: {
                key: "-",
                q: grad,
                aqi: "yes"
            },
            // url: "http://api.weatherapi.com/v1/current.json?key=-&q=Budapest&aqi=yes"
            success: function(response) {
                console.log(response);
            }
        });


    
    });


    $("#pokaziPrognozu").click(function() {
        var grad = $("#grad").val();
        

        $.ajax({
            url: "http://api.weatherapi.com/v1/forecast.json",
            method: "GET",
            data: {
                key: "-",
                q: grad,
                aqi: "yes",
                days: 7,
                alert: "yes",
            },
            success: function(response) {
                console.log(response)
            }
        });

    });


    $("#pokaziIstorijat").click(function() {

        var grad = $("#grad").val();

        $.ajax({
            url: "http://api.weatherapi.com/v1/history.json",
            method: "GET",
            data: {
                key: "-",
                q: grad,
                dt: "2022-12-28"
            },
        });

            
    });
    


});