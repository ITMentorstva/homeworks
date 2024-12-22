<?php

    $automobili = [
        // "zastava"   0         1       2
        "Zastava" => ["Yugo", "Skala", "101"],
    ];


    echo $automobili["Zastava"][1];


    $osobe = [

        // Key => "Toma"
        "Toma" => [
            "prezime" => "Nikolic",
            "godine" => 29,
            "programer" => true,
            "pravo_ime" => "Tomislav"
        ],

        // Key => "Petar"
        "Petar" => [
            "prezime" => "Jovanovic",
            "godine" => 34,
            "programer" => false,
            "pravo_ime" => "Petar",
            "jmbg" => 05053411244542
        ],

    ];

    echo $osobe["Toma"]["godine"];
    echo $osobe["Petar"]["jmbg"];

    // Dodati jos jednu osobu koja se zove "Jelena" u niz $osobe
    // "How to push to assoc array in PHP" - array_push NIJE ODGOVOR

    // Key => "Jelena"
    $osobe["Jelena"] = [
        "prezime" => "Nikolic",
        "godine" => 38,
        "programer" => true,
        "pravo_ime" => "Jelena"
    ];

    echo "Ja se zovem {$osobe['Jelena']['pravo_ime']}, a prezivam se {$osobe['Jelena']['prezime']} ";


    $imena = array_keys($osobe);
    var_dump($imena); // ["Toma", "Petar", "Jelena"]

    // Ispisati sva prezimena iz array-a $osobe, naci koja funkcija to radi
    // HINT: Ime funkcije pocinje sa array_

    // PHP, "get all values", "specific key", "associative array"
    // Jezik, sta zelim, odakle zelim, gde zelim / koji podatak
    // PHP - replace "s" with "a", string

    $prezimena = array_column($osobe, "prezime");
    var_dump($prezimena);