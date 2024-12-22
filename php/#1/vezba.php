<?php

    $cena = 500;
    $iznosPoreza = 0.22;
    $porez = $cena*$iznosPoreza; // 500 * 0.2 = 100

    $totalnaCena = $cena+$porez; // $totalCena = 500+100;

    echo "Cena bez poreza: $cena, iznos poreza: $porez (procenat: $iznosPoreza), totalna cena: $totalnaCena";

    $proizvod = "Hleb";
    echo $proizvod;

    $proizvod .= " Sava"; // "Hleb" + " Sava" = "Hleb Sava" - append
    echo $proizvod;

    $cenaProizvoda = 50;
    $cenaProizvoda += 5; // 50 + 5 = 55
    echo $cenaProizvoda;

    $cenaProizvoda++; // 55+1 = 56
    echo $cenaProizvoda;

?>