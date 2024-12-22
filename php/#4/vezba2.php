<?php

    // 1. Array $automobili ima 3 clana "Golf 1", "Golf 2", "Golf 3"
    // 2. Uraditi proveru da li u tom array-u se nalazi "Golf 2"
    // 3. Ako se nalazi ispisati poruku "Nasli smo najboljeg golfa"
    // HINT: Da li se nesto nalazi u ARRAY-u PHP

    $automobili = [
        "Golf 1", "Golf 2", "Golf 3"
    ];

    if(in_array("Golf 2", $automobili))
    {
        echo "Nasli smo najboljeg golfa";
    }

    $pronadjenGolf = in_array("Golf 2", $automobili); // TRUE, FALSE
    if($pronadjenGolf)
    {
        echo "Nasli smo najboljeg golfa";
    }