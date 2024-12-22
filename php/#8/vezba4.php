<?php 

$brojevi = [2, 4, 3, 5];

foreach($brojevi as &$broj)
{
    $broj *= $broj; // $broj = 4x4, $broj = $broj*$broj;
}


var_dump($brojevi); // 4, 16, 9, 25