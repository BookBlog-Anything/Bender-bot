<?php
$conn = "https://api.telegram.org/bot1274888263:AAEAMc678Wj6k1F5U_xV8kOuyXSuPOP1To0/setwebhook?url=https://botbender-telegram.herokuapp.com/";
$request = file_get_contents("php://input");
$request = json_decode($request);
?>
