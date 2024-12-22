<?php 

    $automobili = [
    //  $marka => $model
        "audi" => "a4",
        "bmw" => "x1"
    ];

    foreach($automobili as $marka => $model)
    {
        echo "Marka automobila je $marka, a model je $model";
    }

    $osobe = [
        "Toma" => [
            "puno_ime" => "Tomislav",
            "prezime" => "Nikolic",
            "godine" => 29
        ],

    //  $ime, 
    // $osoba = ["puno_ime" => "Nikola", "prezime" => "Pavlovic","godine" => 34]
        "Nidza" => [
            "puno_ime" => "Nikola",
            "prezime" => "Pavlovic",
            "godine" => 34
        ],
    ];

    echo $osobe["Toma"]["puno_ime"];
    echo $osobe["Toma"]["prezime"];
    echo "<br>";

// $ime = "Nidza"
// $osoba = ["puno_ime" => "Nikola", "prezime" => "Pavlovic","godine" => 34]
    foreach($osobe as $ime => $osoba)
    {
        $godine = $osoba['godine'];
        echo "Osoba $ime ima $godine godina";
    }