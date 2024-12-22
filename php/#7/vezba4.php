<?php

// 1. Napisati petlju od 1 do 10.000 - for
// 2. Ispisati samo brojeve deljive sa 5

for($i = 0; $i < 100000; $i++)
{
    $ostatak = $i % 5; // 5, 10, 15.. 10/2 = 5,5, 0
    if($ostatak == 0) 
    {
        echo $i;
    }
}