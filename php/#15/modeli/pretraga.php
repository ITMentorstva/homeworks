<?php 

    // http://localhost:8888/php-15/pretraga.php?email=toma%40gmail.com
    // %40 = @

    if( !isset($_GET['email']) || empty($_GET['email']) ) // Proveravamo da li email nije unet ili da li je prazan
    {
        die("Niste uneli email adresu!"); // ispisi gresku - zaustavi kod da ne ide dalje!
    }

    require_once "baza.php"; // ucitaj baza.php jer nam je tamo konekcija ka bazi

    $email = $_GET['email']; // kako ne bi kucali svaki put $_GET['email'] pravimo varijablu $email jer je tako prosto lakse!

    // Daj mi sve korisnike koji imaju email adresu koju je korisnik uneo
    // Rezultat nase pretrage iz baze stavljamo u varijablu $rezultat
    // $email = "a",  SELECT * FROM korisnici WHERE email LIKE '%a%'
    $rezultat = $baza->query("  SELECT * FROM korisnici WHERE email LIKE '%$email%' "); 
    
    // num_rows -> koliko je korisnika nasao
    if($rezultat->num_rows >= 1) // Ako je nasao 1 ili vise korisnika
    {
        echo "Nasli smo ".$rezultat->num_rows." korisnika sa ovom email adresom!"; // Ispisi poruku
    }
    else // Ako nije nasao 1 ili vise korisnika - nasao je 0 korisnika
    {
        echo "Nismo nasli korisnika sa ovom email adresom!"; // ispisi poruku
    }