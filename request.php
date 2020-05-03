<?php
 if($message == "hola"){
      $response = "Dime que hay";
     sendMessage($chatId, $response);
   }else{
   
   }
   if($message == "sabes quien es don miguelo"){
     $response = "🥩Carne https://youtu.be/NjoZOYqgGwE";
     sendMessage($chatId, $response);
}else{

     }

$options =  array("Devendra","noneofthese","Sourabh") ;

$data = [ 'chat_id' => $chatId,   'question' => 'This is whose number 12345 ?',  'options' => json_encode($options)];

$response = file_get_contents("https://api.telegram.org/botbot1274888263:AAEAMc678Wj6k1F5U_xV8kOuyXSuPOP1To0/sendPoll?" . http_build_query($data) );


?>
