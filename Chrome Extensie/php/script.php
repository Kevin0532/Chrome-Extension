<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "aifordebunk";

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "Connected successfully";
} catch (PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
}

$data = file_get_contents("php://input");


$dataArray = json_decode($data, true);

$stmt = $conn->prepare("INSERT INTO websitedata (url, title, webText) VALUES (:url, :title, :webText)");
$stmt->bindParam(':url', $url);
$stmt->bindParam(':title', $title);
$stmt->bindParam(':webText', $webText);

$url = $dataArray['url'];
$title = $dataArray['title'];
$webText = $dataArray['pageText']; 


$stmt->execute();


echo "Data inserted successfully";

