<?php 


    $imena = [
        'Toma', 'Petar', 'Marko'
    ];

    $imePostoji = isset($_POST['ime']);
    if($imePostoji == false)
    {
        die("Niste uneli ime");
    }

    $imeUListi = in_array($_POST['ime'], $imena);
    if($imeUListi == false)
    {
        die("Nismo pronasli ime u listi korisnika");
    }

    echo "Uspesno smo pronasli korisnika";