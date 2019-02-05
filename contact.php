<?php
$errors = '';
$myemail = 'miloskaraklajic@fullstackmaster.rs';
if(empty($_POST['name'])  ||
   empty($_POST['email']) ||
   empty($_POST['message']))
    {
        $errors .= "\n Error: all fields are required";
    }
$name = $_POST['name'];
$email_address = $_POST['email'];
$message = $_POST['message'];


if(empty($errors))
    {
        $to = $myemail;
        $email_subject = "New Message From: $name";
        $email_body = "Nova poruka od posetioca. ".
        " Sadrzaji poruke:\n Name: $name \n ".
        "Email: $email_address\n Message \n $message";
        $headers = "From: $email_address\n";
        $headers .= "Reply-To: $email_address";
        mail($to,$email_subject,$email_body,$headers);
    }
?>