<?php

// 1. Napraviti array koji sadrzi 3 elementa "Reebok", "Adidas", "Nike"
// 2. Pronaci nacin kako da se sortira array tako da bude po abecednom redu
// 3. Var dumpovati rezultat  
// Rezultat: "Adidas", "Nike", "Reebok"

$patike = ["Reebok", "Adidas", "Nike"];

// 1, 2, 3, 4... A, B, C, D
//  "Reebok", "Adidas", "Nike" => "Adidas", "Nike", "Reebok"
sort($patike);

$patike[3] = "Puma";
sort($patike);

var_dump($patike);

// Vezba
// Obrisati prvog clana iz arraya
unset($patike[0]); // unset -> ime array-a -> pozicija, unset($array[5]);
var_dump($patike);