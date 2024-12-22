<!DOCTYPE html>

<html lang="en">

    <head>
        <title>Document</title>
    </head>

    <body>
        <form action="domaci_kalkulacija.php" method="GET">

            <div>
                <input type="text" placeholder="Unesite cenu proizvoda" name="cena_proizvoda">
            </div>

            <div>
                <select name="vrsta_proizvoda">
                    <option>Hrana</option>
                    <option>Oprema za racunare</option>
                </select>
            </div>
            
            <div>
                <input id="porez" type="checkbox" name="porez">
                <label for="porez" >Izracunaj porez</label>
            </div>

            <button>Izracunaj cenu</button>
        </form>
    </body>

</html>