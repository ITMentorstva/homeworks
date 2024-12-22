// $(document).ready(function() {});

$(document).ready(function() {

    $("#podesiElement").on('input',function() {

        var sirinaElementa = $("#sirinaElementa").val();
        var visinaElementa = $("#visinaElementa").val();
        var bojaElementa = $("#bojaElementa").val();

        $("#manipulacioniDiv").css({
            width: sirinaElementa,
            height: visinaElementa,
            backgroundColor: bojaElementa
        });
        console.log("TEST");

    });

    $("#bojaElementa").on('input',function() {
        var boja = $(this).val();
        $("#manipulacioniDiv").css({
            backgroundColor: boja
        })
    });

});