<?php

    $proveriPin = isset($_POST["pin"]);
    // !$proveriPin, $proveriPin == false
    // if($proveriPin), $proveriPin == true
    if(!$proveriPin)
    {
        die("Niste uneli pin"); // STOP 
    }

    $duzinaPina = strlen($_POST["pin"]);
    if($duzinaPina < 4 || $duzinaPina > 6) 
    {
        die("Pin mora biti minimum 4, a maksimum 6 karaktera"); // STOP
    }

    echo "Uspesno ste uneli pin";