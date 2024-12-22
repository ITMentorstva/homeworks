<?php

    $godine = 22;
    $kazne = false;

    if($godine >= 18)
    {
        if($kazne == false)
        {
            echo "Mozete polagati za automobil";
        }
        else
        {
            echo "Imate kazne";
        }
    }
    else
    {
        echo "Nemate 18 godina";
    }

    if($godine >= 18 && $kazne == false)
    {
        echo "Mozete polagati za automobil";
    }
    else
    {
        echo "Niste ispunili uslove";
    }