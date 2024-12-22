<?php 

    // mysql_connect
    // mysqli_connect
    // mysql_query -> mysqli_query 

    // host - localhost - adresa SQL servera -> 55.996.123.134
    // username - root
    // password - ""
    // db_name = ime baze - prvi_cas
    $baza = mysqli_connect("localhost", "root", "root", "prvi_cas");

    if(mysqli_connect_error())
    {
        die("Desila se greska prilikom konektovanja na bazu podataka");
    }

    // 1. Niste upalili MySQL u WAMPP-u ili XAMPP-u
    // 2. Nisu dobri kredencijali - localhost - 127.0.0.1

    // 1. Napraviti varijablu koja drzi konekciju - $baza
    // 2. Pozvati mysqli_query -> prvi argument $baza, drugi "QUERY"
    // 3. Snimiti fajl

    // Procedural programming
    // mysqli_query($baza, " INSERT INTO korisnici (email, lozinka, datum_rodjenja) VALUES ('test2@gmail.com', 'admin123', '1993-02-02') ");

    // OOP - Object Oriented Programming

    $ime = "Crveni krompir";
    $opis = "Crveni krompir najboljeg kvaliteta";
    $cena = 150;
    $datumNabavke = "2023-02-01";
    $kolicina = 22;

    $baza->query("INSERT INTO proizvodi (ime, opis, cena, dan_nabavke, kolicina) VALUES ('$ime', '$opis', $cena, '$datumNabavke', $kolicina) ");