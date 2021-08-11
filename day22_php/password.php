<?php

    //controllare che la password abbia:
        //almeno 8 caratteri
        //almeno una lettera maiuscola
        //almeno un carattere numerico
    
    $password = readline("Inserisci password:");

    $checkLenght = checkLength($password);
    $checkUppercase = checkUppercase($password);
    $checkNumber = checkNumber($password);

    checkAll($checkLenght, $checkUppercase, $checkNumber);

    function checkAll($checkLenght, $checkUppercase, $checkNumber){
        if ($checkLenght && $checkUppercase && $checkNumber) {
            echo "Password valida\n";
        } else {
            echo "Password non valida\n";
        }
    }

    function checkLength($password) {
        if (strlen($password) >= 8) {
            return true;
        } else {
            return false;
        }
    }

    function checkUppercase($password) {
        for ($i=0; $i < strlen($password) ; $i++) { 
            if (ctype_upper($password[$i])) {
                return true;
            }
        }

        return false;
    }
    
    function checkNumber($password) {
        for ($i=0; $i < strlen($password) ; $i++) { 
            if (is_numeric($password[$i])) {
                return true;
            }
        }

        return false;
    }
?>