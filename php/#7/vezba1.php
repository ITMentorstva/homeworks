<?php

    // 1. Napisati array koji ima 3 clana "Audi", "BMW", "Mercedes"
    // 2. Ispisati sve vrednosti arraya koristeci foreach petlju

    //              
    $automobili = ["Audi", "BMW", "Mercedes"];


    // VEZBA 3: Nemoj ispisati "BMW", preskociti ispisivanje tog elementa
    foreach($automobili as $auto)
    {
        if($auto == "BMW")
        {
            continue; // Preskoci
        }
        echo $auto;
    }

    // echo $auto[0]; echo $auto[2];

    // if($auto == "BMW")
    // idi dalje, prekoci
    // $auto = $automobili[0];
    // echo $auto;
    // $auto = $automobili[1];
    // echo $auto;