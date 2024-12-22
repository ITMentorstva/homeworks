<?php 

    $prezime = "Nikolic";

    function ispisiPunoIme($ime)
    {
        global $prezime;
        echo $ime.$prezime; // TomislavNikolic
    }

    ispisiPunoIme("Tomislav");