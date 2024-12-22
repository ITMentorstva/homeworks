<?php 
//       strtolower("Toma") strtolower("Petar"), strtolower("Vlada")
$imena = ["Toma", "Petar", "Vlada"];

$imena = array_map('strtoupper', $imena);

var_dump($imena);