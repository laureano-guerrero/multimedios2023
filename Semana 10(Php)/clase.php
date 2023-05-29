<?php

//nombre de la clase 
class persona{

//atributos
public $nombre;

public $cedula;

public $apellido;

public $correo;

//creamos el constructor
public function __construct($nombre,$cedula,$apellido,$correo){

$this-> $nombre = $nombre;
$this-> $cedula = $cedula;
$this -> $apellido = $apellido;
$this -> $correo = $correo;

}

//Métodos set y get 
public function setNombre($nombre){
$this->nombre = $nombre;

}

public function getNombre(){
    return $this->nombre;
}

}

$persona= new persona('','','','');
$persona->setNombre('Laureano');

echo $persona->getNombre();
?>