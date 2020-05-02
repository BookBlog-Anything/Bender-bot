<?php
require 'conn.php';
  if($new_chat_members){
  	$responde = "Bienvenido al grupo";
	sendMessage($new_chat_members, $response);
  }

require 'request.php';
  switch($message){
    case '/ayuda' :
      $response = "Aqui estoy que necesitas?";
      sendMessage($chatId, $response);
      break;
    case '/chupaelperro':
      $response = "Chupa el perro wey";
      sendMessage($chatId, $response);
  }



  function sendMessage($chatId, $response){
    $url = $GLOBALS[website].'/sendMessage?chat_id='.$chatId. '&parse_mode=HTML&text='.urlencode($response);
    file_get_contents($url);
  }
?>
