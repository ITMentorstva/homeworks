<?php 

    // 1. Napisati funkciju koja vraca obracunati popust
    // Primer: izracunajPopust(1500, 10) - treba da vrati 150
    
    function izracunajPopust($cena, $popust)
    {
        // 1500 / 22 = 68 
        // 1500 * 0.22 = 330
        $popust = $popust/100; // 22 = 0.22
        return $cena * $popust; // 1500 * 0.22 = 330
    }

    $obracunatiPopust = izracunajPopust(1500, 22); // 330
    $obracunatiPopust2 = izracunajPopust(2000, 10); // 200
    $obracunatiPopust3 = izracunajPopust(3000, 15); // 450

    $totalniPopust = $obracunatiPopust+$obracunatiPopust2+$obracunatiPopust3;
    echo "Ukupno popusta danas bilo je $totalniPopust";