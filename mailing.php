<?php
   
   require("phpmailer-5.2/PHPMailerAutoload.php");

   if(isset($_POST['first_name']) && isset($_POST['phone'])) {
      $email = $_POST['email'];
	  $first_name = $_POST['first_name'];
	  $phone = $_POST['phone'];	    

      
      if(empty($errors)) {      
         $content = 'Имя: '.$first_name.' <br>Телефон: '.$phone.'<br>E-mail: '.$email ;
           
         

         $email = new PHPMailer;

         $email->CharSet = 'UTF-8';         
         $email->From = 'moiseev.yu@yandex.ru';
         $email->FromName = 'Сайт Clever';
         $email->Subject = 'Сообщение с главной страницы сайта "Обратная связь" ';
         $email->Body = $content;
         
         
         $email->AltBody = 'Сообщение с главной страницы сайта "Обратная связь"';
         $email->addAddress( 'moiseev.yu@yandex.ru');       
         $send = $email->send();

         if(!$send) {
             echo json_encode('Сообщение не может быть отправлено.');
             echo json_encode('Mailer Error: ' . $email->ErrorInfo);
         } else {
             echo json_encode('Message has been sent');
         } 

      } else{
         echo json_encode($errors);
      }

   } else {
      echo json_encode('Не заполнено');
   }

?>