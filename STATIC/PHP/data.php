<?php
$host = "77.206.5.46";   // Exemple : "localhost" ou "123.45.67.89"
$user = "root";  // Exemple : "root"
$pass = ""; // Mot de passe de l'utilisateur MySQL
$dbname = "shinobi"; // Nom de votre base de données

try {
    $conn = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $user, $pass);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo "Erreur de connexion : " . $e->getMessage();
    die();
}
?>
