<?php 

// Foreach - STALNO KORISTITI - 70-80%
// Koristiti se da bi ispisala/modifikujemo(edituj)/obrisemo 
// elemente iz array-a
// ["a","b", "v"] - 0,1,2 - foreach 0, 2

$korisnici = [
    // 0      1        2
    "Toma", "Pavle", "Veljko"
];

// 1 argument = koji podatak/array 
// $korisnici[0], $korisnici[1] = $korisnik
foreach($korisnici as $korisnik)
{
    echo $korisnik;
}

// echo $korisnici[0]; echo $korisnici[1]; echo $korisnici[2];

/*

    $korisnici = ["Toma", "Pavle", "Veljko"];
    $korisnik = $korisnici[0]; - foreach($korisnici as $korisnik)

    echo $korisnik; // $korisnici[0]

    $korisnik = $korisnici[1];

    echo $korisnik;

*/

