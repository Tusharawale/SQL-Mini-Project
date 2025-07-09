<?php 
include 'db.php';

$action = $_GET['action'] ?? '';

if ($action == 'list') {
    $result = $conn->query("SELECT * FROM patients");
    $patients = [];
    while ($row = $result->fetch_assoc()) {
        $patients[] = $row;
    }
    header('Content-Type: application/json');
    echo json_encode($patients);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $id = $_POST['id'] ?? '';
    $name = $_POST['name'] ?? '';
    $age = $_POST['age'] ?? '';
    $gender = $_POST['gender'] ?? '';
    $contact = $_POST['contact'] ?? '';

    if (!$id || !$name || !$age || !$gender || !$contact) {
        http_response_code(400);
        echo "Missing required fields";
        exit;
    }

    // Check if patient exists
    $stmt = $conn->prepare("SELECT id FROM patients WHERE id = ?");
    $stmt->bind_param("s", $id);
    $stmt->execute();
    $stmt->store_result();

    if ($stmt->num_rows > 0) {
        $stmt->close();
        $stmt = $conn->prepare("UPDATE patients SET name=?, age=?, gender=?, contact=? WHERE id=?");
        $stmt->bind_param("sisss", $name, $age, $gender, $contact, $id);
        $stmt->execute();
        echo "Patient updated";
    } else {
        $stmt->close();
        $stmt = $conn->prepare("INSERT INTO patients (id, name, age, gender, contact) VALUES (?, ?, ?, ?, ?)");
        $stmt->bind_param("ssiss", $id, $name, $age, $gender, $contact);
        $stmt->execute();
        echo "Patient added";
    }

    $stmt->close();
    exit;
}


if ($action == 'delete' && $_SERVER['REQUEST_METHOD'] == 'POST') {
    $id = $_POST['id'] ?? '';
    if (!$id) {
        http_response_code(400);
        echo "Missing id";
        exit;
    }
    $stmt = $conn->prepare("DELETE FROM patients WHERE id = ?");
    $stmt->bind_param("s", $id);
    $stmt->execute();
    echo "Patient deleted";
    $stmt->close();
    exit;
}

http_response_code(400);
echo "Invalid request";
?>
