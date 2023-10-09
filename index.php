<?php 

if(!isset($_GET['page'])){
    include_once 'views/home.php';
    return;
}

include 'views/'.$_GET['page'].".php";