<?php
$nom_usuari = $_GET["n"];
$usuaris =[];
$joan["edat"]=15;
$joan["nom"]="Joan";
$usuaris["usuaris"]=["Joan"=>$joan,"Alexia"=>["edat"=>30,"nom"=>"Alexia"]];
$resposta = $usuaris["usuaris"][$nom_usuari];



echo json_encode($resposta);