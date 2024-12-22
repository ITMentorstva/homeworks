$(document).ready(function() {

    console.log("1") // prvi

    $.ajax({
        url: "https://reqres.in/api/users?delay=5",
        method: "GET",
        success: function(podaci) {
            console.log(podaci) // drugi

            for(var podatak in podaci['data']) {
                $("#podaci").append(podaci['data'][podatak]['email'])
            }

            $("#supportPodaci").html(podaci['support']['text'])
            // .html = innerHTML
        }
    });
    console.log("2") // treci


    $.ajax({
        url: "https://reqres.in/api/users/2",
        method: "GET",
        success: function(response) {
            console.log(response)
        }
    });

});