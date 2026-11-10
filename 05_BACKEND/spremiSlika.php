<?php
// Postavljanje zaglavlja za JSON odgovor
header('Content-Type: application/json; charset=utf-8');

// Dozvoljeni su samo POST zahtjevi
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Dozvoljene su samo POST metode.']);
    exit;
}

// Dohvaćanje sirovih JSON podataka iz tijela zahtjeva
$jsonInput = file_get_contents('php://input');
$data = json_decode($jsonInput, true);

// Provjera jesu li poslani svi potrebni parametri
if (!isset($data['sifra']) || !isset($data['slika'])) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Nedostaju parametri: sifra i/ili slika.']);
    exit;
}

$sifra = $data['sifra'];
$base64Image = $data['slika'];

// Sanitizacija šifre (dozvoljena samo slova, brojevi, crtice i podvlake radi sigurnosti)
$sifraClean = preg_replace('/[^a-zA-Z0-9_\-]/', '', $sifra);

if (empty($sifraClean)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Neispravna šifra entiteta.']);
    exit;
}

// Uklanjanje eventualnog Data URL prefiksa (npr. "data:image/png;base64,")
if (preg_match('/^data:image\/(\w+);base64,/', $base64Image, $type)) {
    $base64Image = substr($base64Image, strpos($base64Image, ',') + 1);
}

// Dekodiranje base64 koda
$decodedImage = base64_decode($base64Image);

if ($decodedImage === false) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Neispravan Base64 format slike.']);
    exit;
}

// Definiranje putanje direktorija
$targetDir = __DIR__ . '/slike';

// Izradite direktorij ako već ne postoji
if (!is_dir($targetDir)) {
    mkdir($targetDir, 0755, true);
}

// Definiranje pune putanje za spremanje (npr. slike/123.png)
$filePath = $targetDir . '/' . $sifraClean . '.png';

// Spremanje datoteke na disk
if (file_put_contents($filePath, $decodedImage) !== false) {
    echo json_encode([
        'success' => true,
        'message' => 'Slika je uspješno spremljena.',
        'path' => 'slike/' . $sifraClean . '.png'
    ]);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Pogreška prilikom zapisivanja datoteke na disk.']);
}