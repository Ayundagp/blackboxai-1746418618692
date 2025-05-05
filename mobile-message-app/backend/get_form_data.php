<?php
require_once 'config.php';

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Get user_id from query parameter
$user_id = isset($_GET['user_id']) ? $_GET['user_id'] : null;

if (!$user_id) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "User ID is required"]);
    exit;
}

try {
    $stmt = $pdo->prepare("
        SELECT 
            id,
            user_id,
            region,
            area,
            kebun,
            blok_no_baris,
            arah_masuk,
            no_pokok,
            jumlah_buah_bulan1,
            jumlah_buah_bulan2,
            jumlah_buah_bulan3,
            jumlah_buah_bulan4,
            jumlah_bunga,
            created_at
        FROM form_data 
        WHERE user_id = ? 
        ORDER BY created_at DESC
    ");
    
    $stmt->execute([$user_id]);
    $forms = $stmt->fetchAll();

    echo json_encode([
        "success" => true,
        "data" => $forms
    ]);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        "success" => false,
        "message" => "Failed to fetch form data: " . $e->getMessage()
    ]);
}
?>
