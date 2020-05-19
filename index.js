var express = require('express')
var app = express()

const port = process.env.PORT || 3000

app.get('/', (req, res) => {
//
const Telegraf = require('node-telegram-bot-api')
const bot = new Telegraf("1274888263:AAEAMc678Wj6k1F5U_xV8kOuyXSuPOP1To0",{polling:true})

//bot.on('new_chat_members', (ctx) =>{
   //ctx.reply("Welcome "+ ctx.chat.username.new_chat_members)
 //console.log(ctx.message.new_chat_members)
//
//

  //
bot.on('message',function(msg, match){
  console.log(msg);
  var description =  "este es una comunidad de estudio de tecnologia en diferentes areas como:\n redes | seguridad | cloud | virtualizacion | servidores | VoIP,etc...\n \n Este es el Link para que se registren en la plataforma de Cisco Webex para futuras video conferencias: https://cart.webex.com/sign-up-webex \n \n  si tiene algun tipo de archivo o documento que quiera compartir porfavor conviertarlo en formato .rar y luego envielo. "
  var options =["Redes","Seguridad","Cloud","Virtualizacion","Servidores","VoIP","Otros"]
  var example 
  var chatId = msg.chat.id
     var newUserName = msg.new_chat_member.username
     var newUserId = msg.new_chat_member.id
     var firstName = msg.new_chat_member.first_name
     var messageId = msg.message_id
     
      

     if(msg.new_chat_members != undefined){
         bot.deleteMessage(msg.chat.id, messageId)
       bot.sendMessage(msg.chat.id, "¡Hola " + firstName + ", Bienvenido a la comunidad de Technology Study " + msg.chat.title+ description )
      bot.sendPoll(msg.chat.id,"Cual es tu preferencia de estudio",options)

    }
    
  })
//})
//bot.start((ctx) =>    console.log(ctx.message.chat.id))
//bot.launch()
//
})

app.listen(port, ()=> console.log("El servidor corre en el puerto ${port}"))




