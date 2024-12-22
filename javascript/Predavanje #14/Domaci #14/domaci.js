// $(document).ready(function() {});

$(document).ready(function() {

    $("#borderRadius").on('input', function() {

        var borderRadius = $(this).val();
        $("#manipulacioniDiv").css({
            borderRadius: borderRadius+"%",
        });
    });

    $("#sirinaElementa").on('input', function() {

        var sirinaElementa = $("#sirinaElementa").val();
        $("#manipulacioniDiv").css({
            width: sirinaElementa,
        });
        

    });

    $("#visinaElementa").on('input', function() {
        
        var visinaElementa = $("#visinaElementa").val();
        $("#manipulacioniDiv").css({
            height: visinaElementa,
        });

    });


    $("#bojaElementa").on('input',function() {

        var boja = $(this).val();
        $("#manipulacioniDiv").css({
            backgroundColor: boja
        });

    });

});