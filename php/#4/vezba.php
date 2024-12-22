<?php

    // 1. Napraviti varijablu $broj cija je vrednost 10
    // 2. Koristeci IF uraditi proveru da li je broj paran ili neparan
    // 3. Ispisati adekvatnu poruku "Broj je paran" ili "Broj je neparan"

    $broj = 5;

    // 10 / 2 = 5,5 = 0 5+5 = 10
    // 9 / 2 = 4,4 (1) = 4+4 = 8 + 1

    // 410 / 2 = 205, 205 = 0
    // 409 / 2  = 204,204 = 1
    // 0 = broj je paran
    // 1 = broj je neparan
    
    // if($broj % 2 == 0) - OVAKO NEMOJTE RADITI


    // RADITE OVAKO, SA VARIJABLOM
    $proveraBroja = $broj % 2; // $broj / 2 (0,1)
    
    if($proveraBroja == 0) // 10 % 2 = 0 (5,5)
    {
        echo "Broj je paran";
    }
    else // 5 % 2 = 1 (2,2)
    {
        echo "Broj je neparan";
    }