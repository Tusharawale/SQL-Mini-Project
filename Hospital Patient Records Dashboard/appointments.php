<?php
include 'db.php';

$action = $_GET['action'] ?? '';

if ($action == 'list') {
    $result = $conn->query("SELECT a.id, p.name AS patient_name, d.name AS doctor_name, a.date, a.time, a.patient_id, a.doctor_id
        FROM appointments a
        JOIN patients p ON a.patient_id = p.id
        JOIN doctors d ON a.doctor_id = d.id");
    $appointments = [];
    while ($row = $result->fetch_assoc()) {
        $appointments[] = $row;
    }
    header('Content-Type: application/json');
    echo json_encode($appointments);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $id = $_POST['id'] ?? '';
    $patient_id = $_POST['patient_id'] ?? '';
    $doctor_id = $_POST['doctor_id'] ?? '';
    $date = $_POST['date'] ?? '';
    $time = $_POST['time'] ?? '';

    if (!$id || !$patient_id || !$doctor_id || !$date || !$time) {
        http_response_code(400);
        echo "Missing required fields";
        exit;
    }

    // Check if appointment exists
    $stmt = $conn->prepare("SELECT id FROM appointments WHERE id = ?");
    $stmt->bind_param("s", $id);
    $stmt->execute();
    $stmt->store_result();

    if ($stmt->num_rows > 0) {
        // Update existing
        $stmt->close();
        $stmt = $conn->prepare("UPDATE appointments SET patient_id=?, doctor_id=?, date=?, time=? WHERE id=?");
        $stmt->bind_param("sssss", $patient_id, $doctor_id, $date, $time, $id);
        $stmt->execute();
        echo "Appointment updated";
    } else {
        // Insert new
        $stmt->close();
        $stmt = $conn->prepare("INSERT INTO appointments (id, patient_id, doctor_id, date, time) VALUES (?, ?, ?, ?, ?)");
        $stmt->bind_param("sssss", $id, $patient_id, $doctor_id, $date, $time);
        $stmt->execute();
        echo "Appointment added";
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
    $stmt = $conn->prepare("DELETE FROM appointments WHERE id = ?");
    $stmt->bind_param("s", $id);
    $stmt->execute();
    echo "Appointment deleted";
    $stmt->close();
    exit;
}

http_response_code(400);
echo "Invalid request";
?>
