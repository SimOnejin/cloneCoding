<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $senderEmail = $_POST['senderEmail'];
    $subject = $_POST['emailSubject'];
    $message = $_POST['message'];
    $to = "recipient@example.com"; // 받는 사람 이메일 주소

    $headers = "From: " . $senderEmail;

    if (mail($to, $subject, $message, $headers)) {
        echo "Email sent successfully!";
    } else {
        echo "Failed to send email.";
    }
}
?>
