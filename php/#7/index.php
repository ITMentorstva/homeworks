<?php

    $korisnici = [
        "Toma", "Pavle", "Veljko",
        "Marko", "Petar", "Nikola",
        "Jovan"
    ];

    echo $korisnici[0]." ".$korisnici[1]." ".$korisnici[2];
    echo $korisnici[3]." ".$korisnici[4]." ".$korisnici[5];

    // Petlje - loop
    // Automatizuju proces prelazenja preko array-a
    // Petlja: uzela bi sve korisnike, i stare i nove
    // Ispisi sve korisnike - 1 linije koda

    // Bez petlje: $korisnici[0] .. $korisnici[99999];
    // Petlja: 1 linija koda

    // Foreach - STALNO KORISTITI - 70-80%
    // Koristiti se da bi ispisala/modifikujemo(edituj)/obrisemo 
    // elemente iz array-a
    // ["a","b", "v"] - 0,1,2 - foreach 0, 2

    // For

    // While (do-while)