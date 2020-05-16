const Telegraf = require('node-telegram-bot-api')
const bot = new Telegraf("1274888263:AAEAMc678Wj6k1F5U_xV8kOuyXSuPOP1To0",{polling:true})

//bot.on('new_chat_members', (ctx) =>{
   //ctx.reply("Welcome "+ ctx.chat.username.new_chat_members)
 //console.log(ctx.message.new_chat_members)
//
  
 //
 bot.on('message',function(msg, match){
     console.log(msg);
     var description = "este es una comunidad de estudio de tecnologia en diferentes areas como:\n redes | seguridad | cloud | virtualizacion | servidores | VoIP,etc...\n \n Para futuras videoconferecias en Cisco Webex: https://cart.webex.com/sign-up-webex \n \n  Si quieres enviar algun archivo tiene que ser comprimido .rar o documento "
     var chatId = msg.chat.id
     var newUserName = msg.new_chat_member.username
     var newUserId = msg.new_chat_member.id
     var firstName = msg.new_chat_member.first_name
     var messageId = msg.message_id

     if(msg.new_chat_members != undefined){

         bot.deleteMessage(msg.chat.id, messageId)
     	bot.sendMessage(msg.chat.id, "¡Hola " + firstName + ", bienvenido a la comunidad " + msg.chat.title+ description)
             }
         })
//})
//bot.start((ctx) =>    console.log(ctx.message.chat.id))
//bot.launch()
