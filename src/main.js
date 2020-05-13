const Telegraf = require('telegraf')
const token = "1274888263:AAEAMc678Wj6k1F5U_xV8kOuyXSuPOP1To0"
const bot = new Telegraf(token, {polling:true})
//bot.new_chat_members((ctx) => ctx.reply("Welcome"))
bot.on('new_chat_members', (ctx) => {
  ctx.reply("Welcome")
}

bot.on('new_chat_members', (ctx) => console.log(ctx.message.new_chat_members))

bot.launch()
