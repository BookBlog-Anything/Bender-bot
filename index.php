<?php
  $conn_bot = "https://api.telegram.org/bot1274888263:AAEAMc678Wj6k1F5U_xV8kOuyXSuPOP1To0";
  $request = file_get_contents($request);
  $request =json_decode($request);

  if($conn_bot){
    echo ="funciona";
  }else{
    echo ="Noooooo";
  }
?>
