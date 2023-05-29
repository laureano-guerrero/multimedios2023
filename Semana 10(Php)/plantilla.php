<?php

//nombre de la clase 
class plantilla{

//atributos
public $menu;

public $footer;

//creamos el constructor

public function __construct(){
$menu = '<nav class="nav justify-content-center bg-black">
<a class="nav-link" href="#">Active link</a>
<a class="nav-link" href="#">Link</a>
</nav>';

$footer = '<footer class="text-center text-white fixed-bottom bg-black">
<!-- Grid container -->
<div class="container p-4"></div>
<!-- Grid container -->

<!-- Copyright -->
<div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
  © 2020 Copyright:
  <a class="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
</div>
<!-- Copyright -->
</footer>';

$this->menu=$menu;
$this-> footer = $footer;


}

//Métodos set y get 
public function setMenu($menu){
$this->menu = $menu;

}

public function getMenu(){
    return $this->menu;
}

public function setFooter($footer){
    $this->footer = $footer;
}

public function getfooter(){
    return $this->footer;
}



}


?>