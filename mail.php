<?php
// несколько получателей
$to  = 'magicilusha@gmail.com' . ', ';  // обратите внимание на запятую
$to .= '';

// тема письма
$subject = 'Письмо с моего сайта';

// текст письма
$message = 'Пользователь' . $_POST['name'] . ' отправил вам письмо:<br>
 Связяться с ним можно по телефону <a href="mailto:' . $_POST['phone'] . '">' . $_POST['phone'] . '</a>'
;

// Для отправки HTML-письма должен быть установлен заголовок Content-type
$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1; charset=utf-8;' . "\r\n"; 

// Дополнительные заголовки
$headers .= 'To: Иван <Ivan@example.com>' . "\r\n"; // Свое имя и email
$headers .= 'From: '  . $_POST['name'] . '<' . $_POST['phone'] . '>' . "\r\n";



// Отправляем

if( mail($to, $subject, $message, $headers) )
	echo 'ok';
else
	echo 'not ok';

?> 