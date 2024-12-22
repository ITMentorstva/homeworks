<?php 

    $baza = mysqli_connect("localhost", "root", "root", "prvi_cas");

    if(mysqli_connect_error())
    {
        die("Desila se greska prilikom konektovanja na bazu podataka");
    }

    if( !isset($_POST['ime_proizvoda']) || empty($_POST['ime_proizvoda']) )
    {
        die("Niste uneli ime proizvoda!");
    }

    if( !isset($_POST['opis']) || empty($_POST['opis']) )
    {
        die("Niste uneli opis proizvoda!");
    }

    if( !isset($_POST['cena']) || empty($_POST['cena']) )
    {
        die("Niste uneli cenu proizvoda!");
    }

    if( !isset($_POST['kolicina']) || empty($_POST['kolicina']) )
    {
        die("Niste uneli kolicinu proizvoda!");
    }

    if( !isset($_POST['datum_nabavke']) || empty($_POST['datum_nabavke']) )
    {
        die("Niste uneli datum nabavke proizvoda!");
    }


    $imeProizvoda = $_POST['ime_proizvoda'];
    $opis = $_POST['opis'];
    $cena = $_POST['cena'];
    $kolicina = $_POST['kolicina'];
    $datumNabavke = $_POST['datum_nabavke'];

    $query = "INSERT INTO proizvodi (ime,opis,cena,kolicina,dan_nabavke) VALUES ('$imeProizvoda', '$opis', $cena, $kolicina, '$datumNabavke') ";
    $baza->query($query);