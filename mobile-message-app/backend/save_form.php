<?php
require_once 'config.php';

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Get JSON input
$data = json_decode(file_get_contents("php://input"));

if (!isset($data->user_id)) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "User ID is required"]);
    exit;
}

try {
    $stmt = $pdo->prepare("
        INSERT INTO form_data (
            user_id, region, area, kebun, blok_no_baris, 
            arah_masuk, no_pokok, jumlah_buah_bulan1, 
            jumlah_buah_bulan2, jumlah_buah_bulan3, 
            jumlah_buah_bulan4, jumlah_bunga
        ) VALUES (
            ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?
        )
    ");

    $stmt->execute([
        $data->user_id,
        $data->region ?? '',
        $data->area ?? '',
        $data->kebun ?? '',
        $data->blokNoBaris ?? '',
        $data->arahMasuk ?? '',
        $data->noPokok ?? '',
        $data->jumlahBuahBulan1 ?? 0,
        $data->jumlahBuahBulan2 ?? 0,
        $data->jumlahBuahBulan3 ?? 0,
        $data->jumlahBuahBulan4 ?? 0,
        $data->jumlahBunga ?? 0
    ]);

    echo json_encode([
        "success" => true,
        "message" => "Form data saved successfully",
        "id" => $pdo->lastInsertId()
    ]);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        "success" => false,
        "message" => "Failed to save form data: " . $e->getMessage()
    ]);
}
?>
