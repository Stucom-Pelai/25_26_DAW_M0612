<?php
$nom_usuari = $_POST["n"];
$usuaris =[];
$joan["edat"]=15;
$joan["nom"]="Joan";
$usuaris["usuaris"]=["Joan"=>$joan,"Alexia"=>["edat"=>30,"nom"=>"Alexia"]];
$resposta = $usuaris["usuaris"][$nom_usuari];
$resposta["info_arxiu"]= json_encode($_FILES["arxiu"]);

echo json_encode($resposta);