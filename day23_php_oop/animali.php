<?php

    class Animale{
        public $specie;
        public $tipo;
        public $habitat;
        public $colore;

        public function __construct($specie, $tipo, $habitat, $colore){
            $this->specie = $specie;
            $this->tipo = $tipo;
            $this->habitat = $habitat;
            $this->colore = $colore;
        }

        public function presentazione(){
            echo "Ciao, sono un $this->specie ($this->tipo).\nVivo a $this->habitat e sono di colore $this->colore.\n";
        }
    }

    class Criceto extends Animale{
        public $nome;
        public $proprietario;
        public $eta;

        public function __construct($specie, $tipo, $habitat, $colore, $nome, $proprietario, $eta){
            parent::__construct($specie, $tipo, $habitat, $colore);
            $this->nome = $nome;
            $this->proprietario = $proprietario;
            $this->eta = $eta;
        }
    }

    $gatto = new Animale('felino', 'mammifero', 'casa', 'bianco');
    $gatto->presentazione();

    $criceto1 = new Criceto('roditore', 'mammifero', 'casa', 'grigio', 'Pippo', 'Marcella', '2');
    $criceto1->presentazione();
?>