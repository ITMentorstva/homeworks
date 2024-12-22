// $(document).ready(function() {});

$(document).ready(function() {

    var username = "admin";
    var password = "123";
    var failedLogins = 0; // +1

    $("#loginButton").click(function() {

        if(failedLogins >= 3) {
            $("#username").attr('disabled', true);
            $("#password").attr('disabled', true);
            return;
        }

       $("#wrongUsername").hide();
       $("#wrongPassword").hide();

        var unetoIme = $("#username").val();
        var unetaLozinka = $("#password").val();

        if(username != unetoIme) {
            $("#wrongUsername").show();
            failedLogins++; // failedLogins = 0, failedLogins +1 = 1, ++ == +1
            return; // STOP CODE
        }

        if(unetaLozinka != password) {
            $("#wrongPassword").show();
            failedLogins++;
            return;
        }
        
        if(username == unetoIme && unetaLozinka == password) {
            $("#loginForm").hide();
            $("#hiddenMessage").show();
        }

    });

});