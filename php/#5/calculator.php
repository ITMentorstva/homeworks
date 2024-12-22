<?php

// calculator.php?broj_1=323&broj_2=356


// Global variable 
// $_SERVER, $_GET, $_POST = assoc array

// var_dump($_GET);
// ["broj_1"] => "323" ["broj_2"] => "356" - nacin na koji var_dump ispisuje
// ["broj_1" => "323", "broj_2" => "356"] - pravilan nacin na koji vi pisete

$vrstaRacunice = $_GET["vrsta_racunice"];
$broj1 = $_GET["broj_1"];
$broj2 = $_GET["broj_2"];

if($vrstaRacunice == "Sabiranje")
{
    // broj_1=66&broj_2=33&vrsta_racunice=Sabiranje
    echo $broj1 + $broj2;
}
else if($vrstaRacunice == "Oduzimanje")
{
    // broj_1=12&broj_2=5&vrsta_racunice=Oduzimanje
    echo $broj1 - $broj2;
}