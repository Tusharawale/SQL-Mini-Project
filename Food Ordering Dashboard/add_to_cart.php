<?php
$host = "localhost";
$user = "root";
$pass = "Tushar904904"; // your MySQL password
$db = "my_website";

$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$data = json_decode(file_get_contents("php://input"));

$name = $conn->real_escape_string($data->name);
$price = $data->price;
$description = $conn->real_escape_string($data->description);
$category = $conn->real_escape_string($data->category);
$icon = $conn->real_escape_string($data->icon);
$rating = $data->rating;

$sql = "INSERT INTO menu_items (name, description, price, category, icon, rating)
        VALUES ('$name', '$description', '$price', '$category', '$icon', '$rating')";

if ($conn->query($sql) === TRUE) {
    echo json_encode(["status" => "success"]);
} else {
    echo json_encode(["status" => "error", "msg" => $conn->error]);
}

$conn->close();
?>
