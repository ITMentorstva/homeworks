<?php 

    // 1. Napisati funkciju koja ce racunati cenu sa dostavom u odnosu na rastojanje
    // Nas Web Shop se nalazi u Beogradu

    // Dostava se moze vrsiti samo na adrese u arrayu ispod 
    // Struktura array ispod je "GRAD" => "RASTOJANJE U KM"
    
    // Cena dostave: Do 100km, dostava iznosi 200 din
    // od 100 do 200km, dostava iznosi 350din
    // Sve preko 200km dostava iznosi 500din

    // Primer: izracunajDostavu(2000, "Subotica") - Rastojanje Subotica - Beograd je 220km, dostava je 500din

    function izracunajDostavu($cena, $grad)
    {
        $cenaDostave = 0;
        $dostava = [
            // KEY     => VALUE
            "Subotica" => 220,
            "Pancevo" => 10,
            "Sarajevo" => 292,
            "Split" => 799
        ];
    
        $gradPostoji = array_key_exists($grad, $dostava);
        if($gradPostoji) 
        {
            $rastojanje = $dostava[$grad]; // $grad = "Subotica" - $dostava["Subotica"]
            
            if($rastojanje <= 100)
            {
                $cenaDostave = 200;
            }
            else if($rastojanje > 100 && $rastojanje <= 200)
            {
                $cenaDostave = 350;
            }
            else {
                $cenaDostave = 500;
            }
        }
        else 
        {
            $cenaDostave = null;
        }

        return $cenaDostave;
    }

    $pancevo = izracunajDostavu(2000, "Pancevo");
    izracunajDostavu(2000, "Sarajevo");
    izracunajDostavu(2000, "Split");
    $cuprija = izracunajDostavu(2000, "Cuprija");
    var_dump($cuprija, $pancevo);