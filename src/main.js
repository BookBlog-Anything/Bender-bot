const Telegraf = require('node-telegram-bot-api')
const bot = new Telegraf(process.env.TELEGRAM_API_TOKEN ,{polling:true})
//Lol ya funciona
//bot.on('new_chat_members', (ctx) =>{
   //ctx.reply("Welcome "+ ctx.chat.username.new_chat_members)
 //console.log(ctx.message.new_chat_members)
//
//

  //
bot.on('message',function(msg, match){
  console.log(msg);
  const description =  "Este es una comunidad de estudio de tecnologia en diferentes areas como:\nredes | seguridad | cloud | virtualizacion | servidores | VoIP,etc...\n\nEste es el Link para que se registren en la plataforma de Cisco Webex para futuras video conferencias: https://cart.webex.com/sign-up-webex \n\nSi tiene algun tipo de archivo o documento que quiera compartir porfavor conviertarlo en formato .rar y luego envielo. "
  const answer =["Redes","Seguridad","Cloud","Virtualizacion","Servidores","VoIP","Otros"]

const chatId = msg.chat.id
     const newUserName = msg.new_chat_member.username
     const newUserId = msg.new_chat_member.id
     const firstName = msg.new_chat_member.first_name
     const messageId = msg.message_id
     const opts ={
       'is_anonymous': false,
        'allows_multiple_answers': true
        }


     if(msg.new_chat_members){
         //bot.deleteMessage(msg.chat.id, messageId)
       bot.sendMessage(msg.chat.id, "¡Hola " + firstName + ", Bienvenido a la comunidad de " + msg.chat.title+ description )
      bot.sendPoll(msg.chat.id,"Cual es tu preferencia de estudio",answer, opts)

    }

  })
//})
//bot.start((ctx) =>    console.log(ctx.message.chat.id))
//bot.launch()
