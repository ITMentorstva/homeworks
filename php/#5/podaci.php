<?php

 // provera_sigurnosti=on
 // ?

 if( isset($_GET["provera_sigurnosti"]) )
 {
    echo $_GET["provera_sigurnosti"];
 }
 else {
    echo "Niste cekirali sigurnost";
 }
