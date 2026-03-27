<?php
// $nom_usuari = $_POST["n"];
// $usuaris = [];
// $joan["edat"] = 15;
// $joan["nom"] = "Joan";
// $usuaris["usuaris"] = ["Joan" => $joan, "Alexia" => ["edat" => 30, "nom" => "Alexia"]];
// $resposta = $usuaris["usuaris"][$nom_usuari];

$resposta["info_arxiu"] = json_encode($_FILES["arxiu"]);

$target_dir = "uploads/";
$target_file = $target_dir . basename($_FILES["arxiu"]["name"]);
if (move_uploaded_file($_FILES["arxiu"]["tmp_name"], $target_file)) {
    $resposta["url_file"]=htmlspecialchars(basename($_FILES["arxiu"]["name"]));
} else {
     $resposta["url_file"]="Sorry, there was an error uploading your file.";
}

echo json_encode($resposta);
