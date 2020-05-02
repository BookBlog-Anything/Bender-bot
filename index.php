<?php

/* Conexion a la Api.telegram.org */
require 'conn.php';
  if($new_chat_members){
  	$responde = "Bienvenido al grupo";
	sendMessage($new_chat_members, $response);
  }

/*---------------*/



/* Requisito de datos  */
require 'request.php';

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





/* Envio o respuesta */
  function sendMessage($chatId, $response){
    $url = $GLOBALS[website].'/sendMessage?chat_id='.$chatId. '&parse_mode=HTML&text='.urlencode($response);
    file_get_contents($url);
  }
?>





/*if there failes, use file recovery
License: MIT |  Powered Heroku & Telegram llc
*/
