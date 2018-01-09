<?php
$field_name = $_POST['name'];
$field_email = $_POST['email'];
$field_phone = $_POST['phone'];
$field_unit = $_POST['unit'];
$field_message = $_POST['message'];

$sendgrid_url = 'https://api.sendgrid.com/';
$user = 'azure_66ef62bf9e3d2aa211ce0928721c68eb@azure.com';
$pass = 'pass1word';

$mail_to = 'dollfinet@gmail.com';
$subject = 'Message from a site visitor '.$field_name;

$body_message = 'From: '.$field_name."\n";
$body_message .= 'E-mail: '.$field_email."\n";
$body_message .= 'Phone: '.$field_phone."\n";
$body_message .= 'Unit: '.$field_unit."\n";
$body_message .= 'Message: '.$field_message;
echo $body_message ."\r\n";

$params = array(
      'api_user' => $user,
      'api_key' => $pass,
      'to' => $mail_to,
      'subject' => $subject,
      'html' => '<p>'.$body_message.'</p>',
      'text' => $body_message,
      'from' => $field_email,
   );

$request = $sendgrid_url.'api/mail.send.json';

// Generate curl request
$session = curl_init($request);

// Tell curl to use HTTP POST
curl_setopt ($session, CURLOPT_POST, true);

// Tell curl that this is the body of the POST
curl_setopt ($session, CURLOPT_POSTFIELDS, $params);

// Tell curl not to return headers, but do return the response
curl_setopt($session, CURLOPT_HEADER, false);
curl_setopt($session, CURLOPT_RETURNTRANSFER, true);

// obtain response
$response = curl_exec($session);
curl_close($session);

echo "Mail sent. Thank you " .$field_name .", we will contact you shortly.";
echo $response;
?>