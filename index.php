<?php
  $conn_bot = "https://api.telegram.org/bot1274888263:AAEAMc678Wj6k1F5U_xV8kOuyXSuPOP1To0";
  $update = file_get_contents("php://input");
  $update =json_decode($update, true);

  $chatId = $update["chat"]["message"]["id"];
  $chatType = $update["message"]["chat"]["type"];

  $message = $update["message"]["text"];
  switch($message){
    case "/ayuda" ;
      $response = "Aqui estoy que necesitas?";
      sendmessage($chatId, $response);
      break;
  }

  function sendmessage($chatId, $response){
    $url = $GLOBALS[website].'sendmessage?chat_id='.$chatId. '&parse_mode=HTML&text='.urlencode($response);
    file_get_contents($url);
  }
?>
