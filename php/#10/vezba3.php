<?php

    // 1. Napisati funkciju koja racuna iznos kamate za kredit na osnovu
    // godine 

    // Pre 2000, kamata 0.05%
    // Izmedju 2000 - 2010, kamata 0.08%
    // Izmedju 2011 - 2020, kamata 0.1%
    // Posle 2020 kamata je 0.14%

    function izracunajKamatu($iznosKredita, $godina)
    {
        $kamata = 0;
        if($godina < 2000)
        {
            $kamata = 0.05;
        }
        else if($godina >= 2000 && $godina <= 2010)
        {
            $kamata = 0.08;
        }
        else if($godina >= 2011 && $godina <= 2020)
        {
            $kamata = 0.1;
        }
        else 
        {
            $kamata = 0.14;
        }

        return $iznosKredita*$kamata;
    }

    $kredit2000 = izracunajKamatu(10000, 1999);
    echo $kredit2000; // 500

    $noviKredit = izracunajKamatu(10000, 2023); // 1400
    echo $noviKredit;

    $kreditPre2010 = izracunajKamatu(10000, 2005); // 0.08 = 800
    echo $kreditPre2010;