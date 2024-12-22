<!DOCTYPE html>

<html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>

    <body>
        <form action="modeli/createProduct.php" method="post">
            <input required type="text" name="ime" placeholder="Unesite ime proizvoda">
            <input required type="text" name="opis" placeholder="Unesite opis proizvoda">
            <input required type="text" name="cena" placeholder="Unesite cenu proizvoda">
            <input required type="text" name="slika" placeholder="Unesite sliku proizvoda">
            <input required type="text" name="kolicina" placeholder="Unesite kolicina proizvoda">
            <button>Napravi proizvod</button>
        </form>
    </body>

</html>