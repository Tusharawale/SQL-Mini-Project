<?php
header('Content-Type: application/json');
require 'db.php';

$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'GET') {
  $result = $conn->query("SELECT * FROM books");
  $books = [];
  while ($row = $result->fetch_assoc()) {
    $books[] = $row;
  }
  echo json_encode($books);
}

if ($method === 'POST') {
  $data = json_decode(file_get_contents("php://input"), true);
  $stmt = $conn->prepare("INSERT INTO books (title, author, category, availability, cover) VALUES (?, ?, ?, ?, ?)");
  $stmt->bind_param("sssss", $data['title'], $data['author'], $data['category'], $data['availability'], $data['cover']);
  if ($stmt->execute()) {
    $data['id'] = $stmt->insert_id;
    echo json_encode($data);
  } else {
    http_response_code(500);
    echo json_encode(["error" => "Failed to add book"]);
  }
}
?>
