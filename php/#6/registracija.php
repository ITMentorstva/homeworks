<?php 

    $imeProsledjeno = isset($_POST["ime"]); // true / false
    if($imeProsledjeno == false) // da li ime nije prosledjeno
    {
        die("Ime nije prosledjeno"); // STOP
    }

    $lozinkaProsledjena = isset($_POST["lozinka"]);
    if($lozinkaProsledjena == false) 
    {
        die("Niste prosledili lozinku"); // STOP
    }

    // 1. Da li je prosledio prazno ime ili lozinku
    // ""
    // "                   "
    // Trim - "                 a" - "a"
    // Trim - "                   " - ""
    $ime = trim($_POST["ime"]);
    if($ime == "")
    {
        die("Morate uneti ime");
    }

    $lozinka = trim($_POST["lozinka"]);
    if($lozinka == "")
    {
        die("Morate uneti lozinku");
    }

    echo $_POST["ime"]." ".$_POST["lozinka"];

    // 1. Proveriti da li su ime i lozinka poslati 
    // 2. Ako nisu poslati izbaciti greske: 
    //  "Ime nije prosledjeno"
    //  "Lozinka nije prosledjena"


    // 1. Isset proveravate da li je taj podatak uopste prosledjen
    // 2. Proverite da li je taj podatak tacan, ""