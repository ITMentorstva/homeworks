<?php

    $ime = "administrator";
    $lozinka = "mojaSifraJeSigurna";

    if($ime == "administrator" && $lozinka == "mojaSifraJeSigurna")
    {
        echo "Dobrodosao";
    }


    // BONUS:
    $ime = strtolower("adminIStratOR"); // prebacujemo "adminIStratOR" u mala slova sa strtolower tako da uvek dobijamo nazad "administrator" malim slovima
    $lozinka = "mojaSifraJeSigurna";

    if($ime == "administrator" && $lozinka == "mojaSifraJeSigurna")
    {
        echo "Dobrodosao";
    }
