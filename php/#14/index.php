<?php 

    require_once "baza.php";

    $rezultat = $baza->query("SELECT * FROM korisnici");

    // num_rows -> koliko je redova u bazi query nasao

    if($rezultat->num_rows > 0)
    {
        echo "Ukupno smo nasli korisnika: ".$rezultat->num_rows;

        // fetch_all -> vrati mi sve korisnike
        // MYSQLI_ASSOC -> vrati mi kao assoc array ['email' => "Toma@gmail.com"]
        // Prebaci me sve redove iz tabele korisnici u assoc array
        $korisnici = $rezultat->fetch_all(MYSQLI_ASSOC); 

        // Kako $korisnici izgleda
        // $korisnici = [
        //     0 => [
        //         "id" => 1,
        //         "email" => "toma@gmail.com",
        //         "sifra" => "mojaSifraNikoJeNeZna",
        //     ],
        //     1 => [
        //         "id" => 2,
        //         "email" => "baba@udruzenjepenzionera.com",
        //         "sifra" => "sifraTajna",
        //     ],
        // ];
        
        foreach($korisnici as $korisnik)
        {
            echo $korisnik['email'];
        }

    }
    else {
        echo "Nismo nasli nijednog korisnika";
    }