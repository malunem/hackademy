<?php

//Scrivere un programma che calcoli la media di un array di numeri interi, considerando solo i numeri divisibili per 2

$numbers = ['1', '2', '3', '4', '10'];

$sum = 0;
$counter = 0;

foreach($numbers as $number) {

    if ($number % 2 == 0) {
        $sum += $number;
        $counter++;
    }
}

echo $sum/$counter . "\n";

?>