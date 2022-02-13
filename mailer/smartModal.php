<?php 

$name = $_POST['modal-name'];
$phone = $_POST['modal-phone'];

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

// $mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.mail.ru';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'shkarinandrew@mail.ru';                 // Наш логин
$mail->Password = 'mp460plant';                           // Наш пароль от ящика
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to
 
$mail->setFrom('shkarinandrew@mail.ru', 'Обратный звонок с сайта Подарков');   // От кого письмо 
$mail->addAddress('shkarinandrew1@gmail.com','director.Vladislav@yandex.ru');     // Add a recipient
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Данные';
$mail->Body    = '
	<h1>Пользователь оставил данные</h1> <br> 
	<strong>Имя:</strong> ' . $name . ' <br>
	<strong>Номер телефона:</strong> ' . $phone;

if(!$mail->send()) {
    return false;
} else {
    return true;
}

?>