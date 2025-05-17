<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "w.poth1001@gmail.com"; // <-- change to your actual email
    $subject = "New Contact Message from Website";

    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $headers = "From: $name <$email>\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    $body = "You received a new message:\n\n";
    $body .= "Name: $name\nEmail: $email\n\nMessage:\n$message\n";

    if (mail($to, $subject, $body, $headers)) {
        http_response_code(200);
        echo "OK";
    } else {
        http_response_code(500);
        echo "Failed to send email.";
    }
}
?>