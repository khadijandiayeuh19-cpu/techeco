<?php
if($_SERVER["REQUEST_METHOD"] == "POST"){
  $name = $_POST['name'];
  $email = $_POST['email'];
  $phone = $_POST['phone'];
  $message = $_POST['message'];

  $to = "khadijandiayeuh19@gmail.com";
  $subject = "Nouvelle demande de devis Ecotech";
  $body = "Nom: $name\nEmail: $email\nTéléphone: $phone\nProjet: $message";

  mail($to, $subject, $body);
  echo "Merci ! Votre demande a été envoyée.";
} 
?>