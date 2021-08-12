<?php 

    //Creare un Computer con tutti i componenti Hardware sfruttando Dependency Injection e Object Composition

    abstract class Periferica{
        abstract function interagisci();
    }

    abstract class Core{
        abstract function descrivi();
    }

    class Tastiera extends Periferica{
        public function interagisci(){
            echo "Sono una tastiera con cui puoi scrivere\n";
        }
    }

    class Schermo extends Periferica{

        public $dimensioni;

        public function __construct($pollici){
            $this->dimensioni = $pollici;
        }

        public function interagisci(){
            echo "Sono uno schermo di " . $this->dimensioni . " con cui puoi visualizzare le cose\n";
        }
    }

    class Touchpad extends Periferica{
        public function interagisci(){
            echo "Sono un touchpad con cui puoi muovere il cursore\n";
        }
    }

    class SSD extends Core{
        
        public $memoria;

        public function __construct($GB){
            $this->memoria = $GB;
        }

        public function descrivi(){
            echo "Sono un SSD di " . $this->memoria . " e ho memoria a lungo termine\n";
        }
    }

    class Ram extends Core{
        public $memoria;

        public function __construct($GB){
            $this->memoria = $GB;
        }

        public function descrivi(){
            echo "Sono una Ram di " . $this->memoria . " e ho memoria a breve termine\n";
        }
    }

    class Processore extends Core{
        public $tipologia;

        public function __construct($processore){
            $this->tipologia = $processore;
        }

        public function descrivi(){
            echo "Sono un Processore " . $this->tipologia . " e faccio funzionare il computer\n";
        }
    }

    class Computer{
        public $tastiera;
        public $schermo;
        public $touchpad;
        public $ssd;
        public $ram;
        public $processore;

        public function __construct(Periferica $tastiera, Periferica $schermo, Periferica $touchpad, Core $ssd, Core $ram, Core $processore){
            $this->tastiera = $tastiera;
            $this->schermo = $schermo;
            $this->touchpad = $touchpad;
            $this->ssd = $ssd;
            $this->ram = $ram;
            $this->processore = $processore;
        }

        public function stampaComponenti(){
            $this->tastiera->interagisci();
            $this->schermo->interagisci();
            $this->touchpad->interagisci();
            $this->ssd->descrivi();
            $this->ram->descrivi();
            $this->processore->descrivi();
        }
    }

    $tastiera1 = new Tastiera;
    $schermo1 = new Schermo('15"');
    $touchpad1 = new Touchpad;

    $ssd1 = new SSD('512 GB');
    $ram1 = new Ram('8 GB');
    $processore1 = new Processore('Intel Core i7');

    $hp_pavilion = new Computer($tastiera1, $schermo1, $touchpad1, $ssd1, $ram1, $processore1);
    $hp_pavilion->stampaComponenti();
?>