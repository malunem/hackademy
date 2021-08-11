<?php

    class Person{
        public $name;
        public $surname;
        public $age;
        protected $address;
        public static $count;
    
        public function __construct($name, $surname, $age, $address){
            $this->name = $name;
            $this->surname = $surname;
            $this->age = $age;
            $this->address = $address;
            self::$count++;

        }

        public function presentati(){
            echo "Ciao, mi chiamo $this->name $this->surname\n";
        }

        public function printAddress(){
            echo "Abito a $this->address\n";
        }
    }

    class Student extends Person{
        public $favSubject;
        public $hackademyNum;

        public function __construct($name, $surname, $age, $address, $favSubject, $hackademyNum){
            parent::__construct($name, $surname, $age, $address);
            $this->favSubject = $favSubject;
            $this->hackademyNum = $hackademyNum;
        }
    }

    class Teacher extends Person{
        public $subject;
        public $skills;

        public function __construct($name, $surname, $age, $address, $subject, $skills){
            parent::__construct($name, $surname, $age, $address);
            $this->subject = $subject;
            $this->skills = $skills;
        }
    }

    $marcella = new Person('Marcella', 'Malune', '25', 'Milano');
    print_r($marcella);
    echo "Numero di persone: " . Person::$count . "\n";
    $marcella->presentati();
    $marcella->printAddress();

    echo "\n\n\n";

    $studente1 = new Student('Nome1', 'Cognome1', '30', 'Bari', 'Backend', '31');
    print_r($studente1);
    echo "Numero di persone: " . Person::$count . "\n";

    echo "\n\n\n";

    $teacher1 = new Teacher('Nome2', 'Cognome2', '30', 'Bari', 'Javascript', ['Javascript', 'HTML', 'CSS', 'React']);
    print_r($teacher1);
    echo "Numero di persone: " . Person::$count . "\n";

?>