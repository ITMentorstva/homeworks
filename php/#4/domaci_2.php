<?php

    $time = date('h');
    
    if($time >= 5 && $time < 12)
    {
        echo "Dobro jutro";
    }
    else if($time >= 12 && $time < 20)
    {
        echo "Dobar dan";
    }
    else
    {
        echo "Dobro vece";
    }