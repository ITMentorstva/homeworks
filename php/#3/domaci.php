<?php

    $naslovSajta = "Postani Programer";
    $navigacija = [
        [
            "stranica" => "Glavna", 
            "adresa" => "home.php"
        ],
        [
            "stranica" => "O Nama", 
            "adresa" => "about_us.php"
        ],
        [
            "stranica" => "Kontakt", 
            "adresa" => "contact.php"
        ],
    ];

?>

<!DOCTYPE html>

<html lang="en">

    <head>
        <title><?= $naslovSajta ?></title>
    </head>

    <body>
    
        <h1><?= $naslovSajta ?></h1>

        <nav>
            <a href="<?= $navigacija[0]['adresa'] ?>"><?= $navigacija[0]['stranica'] ?></a>
            <a href="<?= $navigacija[1]['adresa'] ?>"><?= $navigacija[1]['stranica'] ?></a>
            <a href="<?= $navigacija[2]['adresa'] ?>"><?= $navigacija[2]['stranica'] ?></a>
        </nav>

        <footer>
            <p>Copyright &copy; mojsajt <?= date('Y') ?> </p>
        </footer>
    
        
    </body>

</html>