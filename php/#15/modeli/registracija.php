<?php 


    if( !isset($_POST['email']) || empty($_POST['email']) )
    {
        die("Niste prosledili email!");
    }

    if( !isset($_POST['sifra']) || empty($_POST['sifra']) )
    {
        die("Niste prosledili sifru!");
    }

    $email = $_POST['email'];
    $sifra = password_hash($_POST['sifra'], PASSWORD_BCRYPT);

    require_once "baza.php";

    /**
     * VEZBA
     * 1. Uraditi query da pronadjemo korisnika sa odredjenim mejlom $email
     * 2. Proveriti da li smo dobili nazad neke rezultate ( _rows? )
     */
    $rezultat = $baza->query(" SELECT * FROM korisnici WHERE email = '$email' ");
    
    // Ako nam vrati $rezultat->num_rows 1 ili vise - onda korisnik postoji
    // Ako je rezultat->num_rows 0 onda nema nikoga sa tim mejlom


    if($rezultat->num_rows >= 1) // Korisnik sa mejlom postoji - sa unetim mejlom iz forme $email
    {
        die("Vec postoji korisnik sa ovom email adresom!");
    }
    else // Ako je rezultat 0 
    {
        echo "Uspesno ste se registrovali";
        $baza->query("INSERT INTO korisnici (email, sifra) VALUES ('$email', '$sifra') ");
    }

    