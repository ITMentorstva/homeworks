<?php 

    $ime = "Tomislav";

    // 0 
    $ime = str_replace('o', '0', $ime);
    $ime = str_replace('i', '1', $ime);
    echo $ime;


    // o - 0, i - 1
    $prezime = "Nikolic";
    $prezime = ["N","i","k","o","l","i","c"];

    foreach($prezime as &$slovo)
    {
        if($slovo == "o")
        {
            $slovo = "0";
        } 
        else if($slovo == "i")
        {
            $slovo = "1";
        }
    }

    $prezime = implode('',$prezime);
    echo $prezime;

    // str_replace 

    // Funkcije: 
    // Jednom definisemo, zovemo gde god treba
    // Grupisemo kod 
    // Reusable

    // cena * stopaPoreza + 5 -> izracunaj_pdv
    // izracunaj_pdv(50, 22%) -> 12