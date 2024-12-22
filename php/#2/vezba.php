<?php

// 1. Napisati niz (array) sa 3 clana (Bmw, Mercedes, Audi)
// 2. Dodati 1 novog clana u niz koji se zove Zastava
// 3. Ispisati clanove niza u sledecem redosledu Zastava, Mercedes, Audi, Bmw

$automobili = ["Bmw", "Mercedes", "Audi"];
array_push($automobili, "Zastava");

echo "$automobili[3] $automobili[1] $automobili[2] $automobili[0]";

$brojAutomobila = count($automobili); // 4, $brojAutomobila = 4

echo "Ukupno imamo $brojAutomobila automobila";

var_dump($automobili);

$ime = "Toma";
var_dump($ime);