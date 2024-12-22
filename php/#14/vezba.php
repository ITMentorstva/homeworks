<?php

    // VEZBA
    // 1. Ispisati sve proizvode

    require_once "baza.php";

    $rezultat = $baza->query("SELECT * FROM proizvodi");

    $proizvodi = $rezultat->fetch_all(MYSQLI_ASSOC);

    foreach($proizvodi as $proizvod)
    {
        echo $proizvod['cena'];
    }