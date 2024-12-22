<?php

    // 1. Napraviti array sa 5 vrednosti [22, 53, 36, 46, 13]
    // 2. Ispisati sve vrednosti arraya/niza - foreach
    // 3. Ako je broj deljiv sa 9, preskociti ispis

    // 22, 53, 46, 13
    $nizBrojeva = [22, 53, 36, 46, 13];

    // 4. Koristeci petlju ispod ne ispisivati pojedinacne brojeve
    // Vec samo njihov zbir. 22+53+46+13=134

    $rezultat = 0;
    foreach($nizBrojeva as $broj)
    {
        $ostatak = $broj % 9; // 36 / 9 = 4, 0     22 / 9 = 2, 0.4
        if($ostatak == 0)
        {
            continue;
        }
        $rezultat += $broj; // 0+22=22, 22+53 = 75, 75+46=121
    }

    echo $rezultat;