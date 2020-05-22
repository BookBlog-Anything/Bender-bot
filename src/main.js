const Telegraf = require('node-telegram-bot-api')
const bot = new Telegraf(process.env.TELEGRAM_API_TOKEN ,{polling:true})

bot.on('message',function(msg, match){
   
   //Content
  console.log(msg);
  const description =  "\nEsta es una comunidad de estudio de tecnologia en diferentes areas como:\nRedes | Seguridad | Cloud | Virtualizacion | Servidores | VoIP,etc...\n\nEste Link es para que te registre en la plataforma de Cisco Webex para futuras video conferencias: https://cart.webex.com/sign-up-webex \n\nSi tienes algun tipo de archivo o documento que quieres compartir, porfavor que sea formato .rar y luego envielo. "
  const answer =["Redes","Seguridad","Cloud","Virtualizacion","Servidores","VoIP","Otros"]
  //
     //Function for sendPoll
    function Poll(bot){
          bot.sendPoll(chatId,"Cual es tu preferencia de estudio",answer, opts)

   }
   // 
   
   //Let
   const chatId = msg.chat.id
     const newUserName = msg.new_chat_member.username
     const newUserId = msg.new_chat_member.id
     const firstName = msg.new_chat_member.first_name
     const messageId = msg.message_id
     //SendPoll Settings
     const opts ={
       'is_anonymous': false,
        'allows_multiple_answers': true
        }

   //Sending  data
     if(msg.new_chat_members){
         //bot.deleteMessage(msg.chat.id, messageId)
       bot.sendMessage(msg.chat.id, "¡Hola " + firstName + ", Bienvenido a la comunidad " + msg.chat.title+ description )
      Poll()
    }
//
  })
//end
