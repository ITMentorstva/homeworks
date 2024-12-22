<?php 

    // 1. Pronaci nacin da se ispise zbir brojeva iz arraya
    // bez koriscenja petlji!
    $brojevi = [22, 53, 36, 46, 13];

    $zbir = array_sum($brojevi);
    echo $zbir;

    // Koje su prednosti, a koje mane, array_sum ili foreach

    // Prednosti array_sum: 1 linija, nema zagradi, nema komplikacija
    // Mane array_sum: radi samo zbir, nema preskakanja

    // Prednosti foreach: jednom pisemo, radimo sta zelimo
    // Mane foreach: Nacin pisanja, pravila

    // $proizvodi = [hleb, mleko, jaja];
    // array_sum = 322din

    // foreach - imena proizvoda, cenu, kolicinu, ime kasira