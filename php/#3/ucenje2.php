<?php

    $osobe = [

        // 0
        [
            "ime" => "Tomislav",
            "prezime" => "Nikolic",
            "godiste" => 1993
        ],

        // 1
        [
            "ime" => "Jelena",
            "prezime" => "Nikolic",
            "godiste" => 1984 
        ],

    ];

    echo $osobe[0]["ime"];
    echo $osobe[1]["godiste"];

    // Ispisati koliko godina ima osoba na osnovu godista. Primer: 1993, 30 godina
    // HINT: trenutna godina - godiste, 2023 - 1993 = 30

    $trenutnaGodina = date("Y");
    $tomislavGodine = $trenutnaGodina - $osobe[0]["godiste"]; // 2023 - 1993
    echo "Tomislav ima $tomislavGodine godina";