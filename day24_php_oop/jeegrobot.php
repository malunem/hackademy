<?php

    abstract class ComponenteAttacco{
        abstract function attack();
    }

    abstract class ComponenteDifesa{
        abstract function defend();
    }

    abstract class ComponenteMovimento{
        abstract function move();
    }

    class Trivella extends ComponenteAttacco{
        public function attack(){
            echo "Ha attaccato con: trivella\n";
        }
    }

    class Spada extends ComponenteAttacco{
        public function attack(){
            echo "Ha attaccato con: spada\n";
        }
    }

    class Scudo extends ComponenteDifesa{
        public function defend(){
            echo "Ha difeso con: scudo\n";
        }
    }

    class Elmo extends ComponenteDifesa{
        public function defend(){
            echo "Ha difeso con: elmo\n";
        }
    }

    class Volo extends ComponenteMovimento{
        public function move(){
            echo "Si è spostato volando\n";
        }
    }

    class Corsa extends ComponenteMovimento{
        public function move(){
            echo "Si è spostato correndo\n";
        }
    }

    class JeegRobot{
        public $skillAttacco;
        public $skillDifesa;
        public $skillMovimento;

        public function __construct(ComponenteAttacco $attacco, ComponenteDifesa $difesa, ComponenteMovimento $movimento){
            $this->skillAttacco = $attacco;
            $this->skillDifesa = $difesa;
            $this->skillMovimento = $movimento;
        }

        public function attacca(){
            $this->skillAttacco->attack();
        }

        public function difendi(){
            $this->skillDifesa->defend();
        }

        public function muoviti(){
            $this->skillMovimento->move();
        }
    }

    $spada1 = new Spada();
    $scudo1 = new Scudo();
    $volo1 = new Volo();
    $robot1 = new JeegRobot($spada1, $scudo1, $volo1);

    $robot1->attacca();
    $robot1->difendi();
    $robot1->muoviti();
?>