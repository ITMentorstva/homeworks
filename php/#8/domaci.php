<?php 

$navigacija = [
    "Glavna" => "index.php",
    "O nama" => "about_us.php",
    "Kontakt" => "contact.php",
];

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
        <?php foreach($navigacija as $stranica => $url): ?>
            <a href="<?= $url ?>"><?= $stranica ?></a>
        <?php endforeach; ?>
    </body>
</html>