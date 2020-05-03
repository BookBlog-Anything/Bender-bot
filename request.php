<?php
 if($message == "hola"){
      $response = "Dime que hay";
     sendMessage($chatId, $response);
   }else{
   
   }
   if($message == "sabes quién es don miguelo"){
     $response = "🥩Carne https://youtu.be/NjoZOYqgGwE";
     sendMessage($chatId, $response);
}else{

     }

 if(isset($update['message'])) {
   if(isset($update['message']['new_chat_member'])){
     $text = "hello";
    $url ="https://api.telegram.org/bot1274888263:AAEAMc678Wj6k1F5U_xV8kOuyXSuPOP1To0/sendMessage?chat_id=". $chatId. "&text=" .$text;
    file_get_contents($url);
   }
 }
?>
