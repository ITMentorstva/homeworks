<?php

    // 1. Napravti assoc array koji se zove "automobili"
    // 2. "automobili" treba imati "marka", "model", "godiste"

    // BONUS: Ispisati recenicu "Prodajem automobil MARKA MODEL proizveden GODISTE"
    // "Prodajem automobili Audi A4 proizveden 2004"

    $automobili = [
        "marka" => "Audi",
        "model" => "A4",
        "godiste" => 2004
    ];

    //echo "Prodajem automobil $automobili['marka'] MODEL proizveden GODISTE";

    echo "Prodajem automobil ".$automobili['marka']." ".$automobili['model']." proizveden ".$automobili['godiste'];

    echo "Prodajem automobil {$automobili['marka']} {$automobili['model']} proizveden {$automobili['godiste']}";