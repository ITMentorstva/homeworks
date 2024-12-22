<?php

    //                 0       1        2
    //               "ime"   "prezime"  "godine"
    $informacije = [
        "Toma", 
        "Nikolic", 
        29
    ];

    echo $informacije[1];

    $osoba = [
        "ime" => "Toma", // key (assoc) => value (vrednost)
        "prezime" => "Nikolic",
        "godine" => 29
    ];

    echo $osoba["ime"];
    echo $osoba["prezime"];
    echo $osoba["godine"];