<?php

    $ime = "Toma";
    $godine = 29;
    $rezultat = 2+2;

?>

<!DOCTYPE html>

<html lang="en">

    <head>
        <title>Vezba 3 u PHP-u</title>
    </head>

    <body>
        
        <h1> <?php echo $ime; ?>  </h1>
        <h1> <?= $ime; ?> </h1>

        <p> <?php echo $godine; ?> </p>
        <p> <?php echo $rezultat; ?> </p>
        
    </body>

</html>