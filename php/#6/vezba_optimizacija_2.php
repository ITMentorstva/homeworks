<?php 

    if(!isset($_POST["pin"]))
    {
        die("Niste uneli pin"); // STOP 
    }

    $duzinaPina = strlen($_POST["pin"]);
    if($duzinaPina < 4 || $duzinaPina > 6) 
    {
        die("Pin mora biti minimum 4, a maksimum 6 karaktera"); // STOP
    }

    echo "Uspesno ste uneli pin";