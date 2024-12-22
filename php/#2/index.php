<?php 

    $ime = "Toma";

    //            0        1       2         3         4          5
    //  redni broj  -  index            
    $ucenici = ["Toma", "Marko", "Mateja", "Milica", "Teodora", "Petar"];

    echo $ucenici[0]; // Toma
    echo $ucenici[5];

    $ucenici[0] = "Tomislav"; // Toma -> Tomislav
    echo $ucenici[0];

    array_push($ucenici, "Igor", "Jovan", "Mladen"); // 6 => Igor, 7 => "Jovan", 8 => "Mladen"
    echo $ucenici[6];
    echo $ucenici[7];
