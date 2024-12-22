<?php 

    if( !isset($_GET['id']) || empty($_GET['id']) )
    {
        die("Fali ID proizvoda!");
    }

    require_once "modeli/baza.php";

    $idProizvoda = $_GET['id'];

    // http://localhost:8888/php-16/proizvod.php?id=1 -> SELECT * FROM proizvodi WHERE id = 1
    // http://localhost:8888/php-16/proizvod.php?id=5 -> SELECT * FROM proizvodi WHERE id = 5


    $rezultat = $baza->query(" SELECT * FROM proizvodi WHERE id = $idProizvoda ");
    
    if($rezultat->num_rows == 0)
    {
        die("Ovaj proizvod ne postoji");
    }

    $proizvod = $rezultat->fetch_assoc();

    // $proizvod = [ 
    //     "id"=> "2" 
    //     "ime"=> "iPhone 11" 
    //     "opis"=> "iPhone 11 kao nov, baba koristila za FB" 
    //     "cena"=> "989.99" 
    //     "slika"=> "iPhone11.jpg" 
    //     "kolicina"=> "22"
    // ]

?>

<!DOCTYPE html>

<html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>

    <body>
        <h1><?= $proizvod['ime'] ?></h1>
        <p><?= $proizvod['opis'] ?></p>
        <p>Cena proizvoda: <?= $proizvod['cena'] ?></p>

        <?php if($proizvod['kolicina'] == 0): ?>
            <p>Nema na stanju</p>
        <?php else: ?>
            <p>Ima na stanju</p>
        <?php endif; ?>
    </body>

</html>