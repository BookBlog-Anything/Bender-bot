const express = require('express')
const app = express()

const port = process.env.PORT || 3000
const token= process.env.TELEGRAM_API_TOKEN 

const Telegraf = require('node-telegram-bot-api')
const bot = new Telegraf( token,{polling:true})


//

  //
app.get('/',(req, res) =>{
bot.on('message',function(msg, match){
  console.log(msg);
  var description =  "\nEste es una comunidad de estudio de tecnologia en diferentes areas como:\n\nredes | seguridad | cloud | virtualizacion | servidores | VoIP,etc...\n \nEste es el Link para que se registren en la plataforma de Cisco Webex para futuras video conferencias: https://cart.webex.com/sign-up-webex \n \n Si tiene algun tipo de archivo o documento que quiera compartir porfavor conviertarlo en formato .rar y luego envielo. "
  var options =["Redes","Seguridad","Cloud","Virtualizacion","Servidores","VoIP","Otros"]
  var extra = {
	'is_anonymous' : false,
	'allows_multiple_answers': 'true'
	}
  var chatId = msg.chat.id
     var newUserName = msg.new_chat_member.username
     var newUserId = msg.new_chat_member.id
     var firstName = msg.new_chat_member.first_name
     var messageId = msg.message_id
     
      

     if(msg.new_chat_members){
         //bot.deleteMessage(msg.chat.id, messageId)
       bot.sendMessage(msg.chat.id, "¡Hola " + firstName + ", Bienvenido a la comunidad de " + msg.chat.title+ description) 
		bot.sendPoll(chatId, "Cuales son tus preferencias de estudio",options,extra)
	
    }
	})
app.listen(port,()=>console.log("Funciona"))


  })


app.listen(port, ()=> console.log('The server is running on port '+ port ))




