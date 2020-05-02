<?php
/* Conexion a la Api.telegram.org */
$website = "https://api.telegram.org/bot1274888263:AAEAMc678Wj6k1F5U_xV8kOuyXSuPOP1To0";
  $update = file_get_contents("php://input");
  $update =json_decode($update, TRUE);
/*--------------------------------*/


/*Enlance de datos*/
  $chatId = $update["message"]["chat"]["id"];
  $chatType = $update["message"]["chat"]["type"];

  $message = $update["message"]["text"];
  $new_chat_members = $update["new_chat_members"];

  if($new_chat_members){
  	$responde = "Bienvenido al grupo";
	sendMessage($new_chat_members, $response);
  }
/*-------------------------------------------*/


/* Requisito de datos  */

  if($message == "hola"){
   $response = "dime que hay";
    sendMessage($message, $response);
  }
  if($message == "Hola"){
    $response = "dime que hay";
    sendMessage($message, $response);
  }
/*------------------------------------*/

/* Comandos programados */
  switch($message){
    case '/ayuda' :
      $response = "Aqui estoy que necesitas?";
      sendMessage($chatId, $response);
      break;
    case '/chupaelperro':
      $response = "Chupa el perro wey";
      sendMessage($chatId, $response);
  }
/*---------------------------------------*/



/* Envio o respuesta */
  function sendMessage($chatId, $response){
    $url = $GLOBALS[website].'/sendMessage?chat_id='.$chatId. '&parse_mode=HTML&text='.urlencode($response);
    file_get_contents($url);
  }
/*-----------------------------------------------------------------*/
?>






