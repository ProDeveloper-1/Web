<?php
// Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;

if (isset($_POST['name']) && isset($_POST['email'])) {
    // Collect, CORRECT AND POST values of input fields
    $senderName = trim($_POST['name']);
    $senderEmail = trim($_POST['email']);
    $senderSubject = trim($_POST['subject']);
    $senderMessage = trim($_POST['message']);

    require_once('PHPMailer/PHPMailer.php');
    require_once('PHPMailer/SMTP.php');
    require_once('PHPMailer/Exception.php');

    // Instantiation and passing `true` enables exceptions
    $mail = new PHPMailer();

    // Server settings (smtp settings)
    $mail->isSMTP();                                            // Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                    // Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'prospermbuma@gmail.com';                     // SMTP username (Gmail address that you will use as a SMTP server)
    $mail->Password   = 'ihrqcylmkqdoyokt';                               // SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
    //$mail->Port       = 587;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above
    $mail->SMTPSecure = "ssl";
    $mail->Port       = 465;

    // Recipients (email settings)
    $mail->receiverName = 'Prosper Mbuma';
    $mail->receiverEmail = 'prospermbuma@gmail.com';
    $mail->setFrom($senderEmail, $senderName); // Gmail address which you used as a SMTP server
    $mail->addAddress($mail->receiverEmail, $mail->receiverName);     // Add a recipient
    $mail->addAddress($mail->receiverEmail);               // Name is optional
    $mail->addReplyTo($senderEmail, $senderName);
    $mail->addCC($mail->receiverEmail);
    $mail->addBCC($mail->receiverEmail);

    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = ($senderSubject); // Here is the subject
    $mail->Body = $senderMessage; //  This is the HTML message body
    $mail->Body = wordwrap($mail->Body, 70);
    $mail->AltBody = $senderMessage; // This is the body in plain text for non-HTML mail clients

    // Send email
    
    if ($mail->send()) {
       $status = "Success";
       $response = "Email is sent!"; 
    }
    else {
        $status = "Failed";
        $response = "Something went wrong: <br>". $mail->ErrorInfo;
    }

    exit(json_encode(array("status" => $status, "response" => $response)));
}
?>