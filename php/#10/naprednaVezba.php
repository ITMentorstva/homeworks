<?php 

    // 1. Napisati funkciju za kalkulaciju popusta, popust je uvek 10%
    function izracunajPopust($cena)
    {
        return $cena*0.1;
    }

    // 2. Izracunati popust za sve brojeve iz varijable $brojevi
    // Upisati svaki popust u array $popusti
    $brojevi = [250, 330, 1000, 2000, 5000];
    $popusti = [];

    // logika....
    foreach($brojevi as $broj)
    {
        $popust = izracunajPopust($broj);
        array_push($popusti, $popust);
    }


    // U varijablu $ukupan popust upisati koliki je ukupan iznos niza $popusti
    $ukupanPopust = array_sum($popusti); // [25, 33, 100, 200, 500]  = 25+33+100+200+500=858
    echo "Ukupan popust za danasnji dan je $ukupanPopust din";


    // $popusti = [25, 33, 100, 200, 500]
    // $ukupanPopust = 858;
