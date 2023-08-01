const { Client, GatewayIntentBits } = require('discord.js')
const { Guilds, GuildMessages, MessageContent } = GatewayIntentBits
const client = new Client({ intents: [Guilds, GuildMessages, MessageContent] })
client.login('MTEzNTQ2MTE2NzMwNTg1NDk3Ng.GBgFAE.1jmKEJfrp6Kk-F5lmAs7CvaD6Nkp1FPvpMPK3Y')

client.once('ready', () => console.log('봇 준비됨'))
client.on('messageCreate', message => {
  if (message.content === '!!!!!ping')
    message.reply('!!!!pong')
})

require('./server')()
