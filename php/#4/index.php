<?php

    $ime = "Toma";
    $godine = 29;
    $visina = 181;

    // Conditional statement - if

    // Ako je vrednost varijable $ime jednaka stringu "Toma"
    if($ime == "Toma") 
    {
        echo "Pozdrav Tomo!";
    }


    if($godine == 18)
    {
        echo "Imate 18 godina";
    }
    else if($godine == 29)
    {
        echo "Imate 29 godina";
    }

    if($visina < 170)
    {
        echo "Niski ste";
    }
    else 
    {
        echo "Visoki ste";
    }



    $godinaRodjenja = 1900;


    if($godinaRodjenja == 1992) 
    {
        echo "Imate 31 godinu";
    }
    else if($godinaRodjenja == 1999) 
    {
        echo "Imate 24 godine";
    }
    else if($godinaRodjenja == 1990)
    {
        echo "Imate 33 godine";
    }
    else 
    {
        // X = koliko godina zapravo imam
        // 30
        // trenutnaGodina - godinaRodjenja
        $trenutneGodine = date("Y") - $godinaRodjenja;

        echo "Imate $trenutneGodine godina";
    }