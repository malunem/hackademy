<?php

//FIZZ BUZZ: Scrivere un programma che stampi in console tutti i numeri da uno a cento. Se il numero e’ multiplo di 3, non deve stampare il numero ma “PHP”; se multiplo di 5 deve stampare “JAVASCRIPT”; se multiplo di 3 e 5 (15) deve stampare “HACKADEMY31”

for ($i=1; $i <= 100 ; $i++) { 
    if($i % 15 == 0) {
        echo "Hackademy 31\n";
    } else if($i % 3 == 0) {
        echo "PHP\n";
    } else if($i % 5 == 0) {
        echo "Javascript\n";
    } else {
        echo "$i\n";
    }
}

?>