const Discord = require('discord.js')

const bot = new Discord.Client();

const prefix = '!^'

bot.on('ready',() => {
    console.log('This bot is online and up to date!')

})

bot.on('guildMemberAdd', member =>{

    const channel = member.guild.channels.cache.find(channel => channel.name === "new-members");
    if(!channel) return;
    channel.send(`Welcome to our server, ${member}, please read the rules in the rules channel, and we hope you enjoy your stay!`)

});

bot.on('message', async message => {
    if (message.author.bot) return;

    let args = message.content.substring(prefix.length).split(" ");

    guild = message.guild.id;

    console.log("I recieved a message from " + message.guild.id + ' which was sent by ' + message.author.username + '. The message was: ' + message.content)

bot.user.setActivity('!^setrule || Check out h!youtube', {
    type: 'LISTENING'
}).catch(console.error);
console.log('Activity Set!');
switch (args[0]) {}
    if(message.guild.roles.cache.find(roles => role.name === 'VIP' && message.content.startsWith('!^setrule'))) {
        message.reply('What rule would you like to set? (Type rule = [rule here without the brackets]')
        if(message.content.startsWith('rule = ')) {
            message.pin
        } else {
            message.channel.send('You didn\'t follow the syntax..')
        }   
    }
})
bot.login('bot token');
