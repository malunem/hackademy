<?php

//Creare un array di persone con nome, cognome e genere. Se il genere e’ M stampare “Buongiorno Sig.” e se e’ F stampare “Buongiorno Sig.ra”

$people = [
    [
        "nome" => "Cristiano",
        "cognome" => "Franco",
        "genere" => "M"
    ],

    [
        "nome" => "Marcella",
        "cognome" => "Malune",
        "genere" => "F"
    ],
];

foreach($people as $person) {

    if ($person["genere"] == "M") {
        echo "Buongiorno Sig. {$person["nome"]} {$person["cognome"]}\n";
    } else if ($person["genere"] == "F") {
        echo "Buongiorno Sig.ra {$person["nome"]} {$person["cognome"]}\n";
    }
}

?>