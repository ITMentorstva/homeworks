<?php

/**
 * 1. Napraviti fajlove pretraga.php i index.php
 * 2. Potrebno je napraviti pretragu korisnika po emailu
 *  - index.php: forma za pretragu, polje za unos mejla
 *  - pretraga.php: logika za proveru da li imamo korisnika sa tim mejlom u bazi
 * 
 *  - Ako imamo korisnika ispisati "Nasli smo korisnika sa tim emailom"
 *  - Ako nemamo korisnika ispisati "Nema registrovanih korisnika sa tim emailom"
 * 
 */

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
        <form action="modeli/pretraga.php" method="GET">
            <input type="text" name="email" placeholder="Unesite email za pretragu" required>
            <button>Pretrazi</button>
        </form>
    </body>

 </html>