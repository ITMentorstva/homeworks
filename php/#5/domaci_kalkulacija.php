<?php

    $cena = $_GET["cena_proizvoda"];

    $vrstaProizvoda = $_GET["vrsta_proizvoda"];

    if($vrstaProizvoda == "Hrana")
    {
        $cena += 50;
    }
    else if($vrstaProizvoda == "Oprema za racunare")
    {
        $cena += 350;
    }

    if( isset($_GET['porez']) )
    {
        $cena = ($cena*0.10)+$cena;
    }

    echo $cena;