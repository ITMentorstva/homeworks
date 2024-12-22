<?php 


    function pomnozi($broj, $mnozilac)
    {
        $rezultat = $broj*$mnozilac; // 10 * 12 = 120
        return $rezultat;
    }

    $pomnozeniBrojevi = pomnozi(55, 22); // $pomnozeniBrojevi = 55*22;
    echo $pomnozeniBrojevi;

    $pomnozeniBrojevi = $pomnozeniBrojevi / 2; // 1210 / 2 = 605
    echo $pomnozeniBrojevi;

    // Ukupno: 1000
    // Sa popustom: 900
    // Popust: 100

    // $popust = 100
    // $ukupno = 1000
    // $saPopustom = $ukupno-$popust;