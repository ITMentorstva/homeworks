<?php

    $naslovSajta = "Postani Programer";
    $navigacija = ["Glavna", "O nama", "Kontakt"];

?>

<!DOCTYPE html>

<html lang="en">

    <head>
        <title><?= $naslovSajta ?></title>
    </head>

    <body>
    
        <h1><?= $naslovSajta ?></h1>

        <nav>
            <a><?= $navigacija[0] ?></a>
            <a><?= $navigacija[1] ?></a>
            <a><?= $navigacija[2] ?></a>
        </nav>
    
        
    </body>

</html>