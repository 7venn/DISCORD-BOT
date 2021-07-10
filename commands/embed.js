const Discord = require('discord.js')

module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
        .setTitle('========= MOD MENU =========')
        .setDescription('`>mute + @` = Mute ON\n`>unmute + @` = Mute OFF \n`>tmute + @ + sec` = Mute temporaire \n `>ban + @` = Bannissement Def\n `>tban + @ + sec` = Bannissement Temp\n `>warn + @` = Mettre un Avertissement'))
    },
    name: 'embed'
}


