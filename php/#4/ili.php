<?php

    $ime = "Petar";

    // Toma, Petar - Dobrodosao
    if($ime == "Toma")
    {
        echo "Dobrodosao";
    }
    else if($ime == "Petar")
    {
        echo "Dobrodosao";
    }
    else 
    {
        echo "Niste Toma ili Petar";
    }

    if($ime == "Toma" || $ime == "Petar")
    {
        echo "Dobrodosao";
    }
    else 
    {
        echo "Niste Toma ili Petar";
    }