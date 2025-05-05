<?php
require_once 'config.php';

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Get JSON input
$data = json_decode(file_get_contents("php://input"));

if (!isset($data->username) || !isset($data->password)) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Username and password are required"]);
    exit;
}

$username = trim($data->username);
$password = $data->password;

try {
    $stmt = $pdo->prepare("SELECT * FROM users WHERE username = ?");
    $stmt->execute([$username]);
    $user = $stmt->fetch();

    if ($user && password_verify($password, $user['password'])) {
        // Remove password from response
        unset($user['password']);
        echo json_encode([
            "success" => true,
            "message" => "Login successful",
            "user" => $user
        ]);
    } else {
        http_response_code(401);
        echo json_encode([
            "success" => false,
            "message" => "Invalid username or password"
        ]);
    }
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        "success" => false,
        "message" => "Server error occurred"
    ]);
}
?>
