<?php 

    // korpa.php -> POST
    // [ZAVRSENO] id_proizvoda = $_POST['id_proizvoda'] -> koji proizvod je u pitanju
    // [ZAVRSENO] kolicina = $_POST['kolicina'] -> koliko komada zelimo
    // id_korisnika = $_SESSION['user_id'] -> ko je osoba koja narucuje
    // cena = Cena -> ? SELECT price FROM proizvodi WHERE id = ...

    if(session_status() === PHP_SESSION_NONE)
    {
        session_start();
    }

    // Dodavanje narudzbina u bazu
    if(!isset($_POST['id_proizvoda']) || empty($_POST['id_proizvoda']))
    {
        die("Morate uneti ID proizvoda");
    }

    if(!isset($_POST['kolicina']) || empty($_POST['kolicina']))
    {
        die("Morate uneti kolicinu");
    }

    // $cena -> podataka iz baze za taj proizvod -> id_proizvoda
    require_once "modeli/baza.php";

    $idProizvoda = $_POST['id_proizvoda'];
    $kolicina = $_POST['kolicina'];
    $idKorisnika = $_SESSION['user_id'];
    
    $rezultat = $baza->query("SELECT cena FROM proizvodi WHERE id = $idProizvoda");
    
    $redIzBaze = $rezultat->fetch_assoc(); // ["cena"]=> string(7) "1999.99" -> $redIzBaze = ["cena" => "1999.99"]
    $cena = $redIzBaze['cena'];
    $cena = $cena * $kolicina; // 10 * 1999.99 = 19999.9

    $idProizvoda = $baza->real_escape_string($idProizvoda);
    $kolicina = $baza->real_escape_string($kolicina);
    $cena = $baza->real_escape_string($cena);
    $idKorisnika = $baza->real_escape_string($idKorisnika);
    
    $baza->query("INSERT INTO narudzbine (id_proizvoda, id_korisnika, kolicina, cena) VALUES ($idProizvoda, $idKorisnika, $kolicina, $cena) ");

    // MYSQL Injection
    // $kolicina = 11;
    // INSERT INTO narudzbine (id_proizvoda, id_korisnika, kolicina, cena) VALUES (1, 13, 11, 25999)

    // $kolicina = "AND DELETE * FROM narudzbine"
    // INSERT INTO narudzbine (id_proizvoda, id_korisnika, kolicina, cena) VALUES (1, 13, AND DELETE * FROM narudzbine, 25999)
    // 1. Upisi narudzbinu
    // 2. Obrisi sve narudzbine - AND DELETE * FROM narudzbine

    // $kolicina = SELECT * FROM korisnici

    // ESCAPE
    // Bilo sta sto korisnik unese u $kolicina NE sme da se izvrsi kao Query


    // MYSQL injection
    // Kada korisnik izvrsi svoj SQL query preko neke forme