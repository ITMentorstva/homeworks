<?php

    // 1. Napisati funkciju koja ce ispisati da li je broj paran ili neparan
    // Primer: daLiJeBrojParan(22) -> ispisuje "Broj je paran"
    // Primer 2: daLiJeBrojParan(3) -> Ispisuje "Broj je neparan"

    // BONUS: daLiJeBrojParan(0) -> "Broj 0 se ne moze proslediti kao argument"


    function daLiJeBrojParan($broj)
    {
        $rezultat = $broj % 2; // 22 / 2 = 0 (22 % 2 = 0), 3 % 2 = (1,1) - 1

        if($broj == 0)
        {
            echo "Broj ne moze biti 0!";
        }
        else 
        {
            if($rezultat == 0)
            {
                echo "Broj je paran";
            }
            else 
            {
                echo "Broj je neparan";
            }
        }
        
    }

    daLiJeBrojParan(0);
    daLiJeBrojParan(22);