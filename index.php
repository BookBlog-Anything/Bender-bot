<?php
  $website = "https://api.telegram.org/bot1274888263:AAEAMc678Wj6k1F5U_xV8kOuyXSuPOP1To0";
  $update = file_get_contents("php://input");
  $update =json_decode($update, TRUE);

  $chatId = $update["message"]["chat"]["id"];
  $chatType = $update["message"]["chat"]["type"];

  $message = $update["message"]["text"];
  $new_chat_members = $update["new_chat_members"];
  /*if(){
  
  }*/
  switch($message){
    case '/ayuda' :
      $response = "Aqui estoy que necesitas?";
      sendMessage($chatId, $response);
      break;
    case '/chupaelperro':
      $response = "Chupa el perro wey";
      sendMessage($chatId, $response);
  }

   if($message == "hola"){
      $response = "Dime que hay";
     sendMessage($chatId, $response);
   }else{
   
   }
   if($message == "sabes quién es don miguelo"){
     $response = "🥩Carne";
     sendMessage($chatId, $response);
}else{
     $response =" realmente no se";
     sendMessage($chatId, $response);
     }
  function sendMessage($chatId, $response){
    $url = $GLOBALS[website].'/sendMessage?chat_id='.$chatId. '&parse_mode=HTML&text='.urlencode($response);
    file_get_contents($url);
  }
?>
