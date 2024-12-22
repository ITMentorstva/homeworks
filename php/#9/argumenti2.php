<?php 

    // 1. Napraviti funkciju koja prima 2 broja (2 argumenta)
    // Ispisati rezultat ta 2 broja
    // Primer poziva: izracunaj(2,5) - ispisuje 7
    // kalkualtor - samo racunanje

    // $broj ili $broj2 - ne sme biti 0!
    function izracunaj($broj, $broj2)
    {
        if($broj == 0 || $broj2 == 0)
        {
            // ispisi poruku, STANI
            // STOP
            echo "Brojevi ne smeju biti 0";
        } 
        else
        {
            echo $broj+$broj2;
        }
        
    }

    izracunaj(2,0);