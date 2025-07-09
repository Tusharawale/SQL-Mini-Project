<?php
// db.php
$servername = "localhost";
$username = "root";
$password = "Tushar904904";
$dbname = "clinic";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
?>
