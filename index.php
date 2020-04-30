<?php
  $conn_bot = "https://api.telegram.org/bot1274888263:AAEAMc678Wj6k1F5U_xV8kOuyXSuPOP1To0";
  $update = file_get_contents("php://input");
  $update =json_decode($update, true);

  $chatId = $update["Chat"],["Message"],["Id"];
  $chatType = $update["Message"],["Chat"],["Type"];

  switch(){
    case "/ayuda" :
      $response = "Aqui estoy que necesitas?";
      break;
  }

  function sendmessage(){
  
  }
?>
