const fs = require('fs');
const { Client, GatewayIntentBits, Collection, Partials, EmbedBuilder } = require('discord.js');
const { Guilds, GuildMembers, GuildMessages, MessageContent, GuildPresences } = GatewayIntentBits;
const { User, Message, GuildMember, ThreadMember} = Partials
const client = new Client({ intents: [Guilds, GuildMembers, GuildMessages, MessageContent, GuildPresences], partials: [User, Message, GuildMember, ThreadMember, GuildPresences] });

const loadCommands = require('./handlers/commandLoader'); // Importa la función loadCommands desde el archivo commandsLoader.js
const path = require('path');
require('./server')
//Ruta de los comandos
const mainFolder = path.join(__dirname, "commands")




//Event handler
const { loadEvents} = require("./handlers/eventLoader");
const {connect} = require('./utils/connect');
client.events = new Collection;
loadEvents(client)

//Command Handler
client.commands = new Collection();

connect()

//Evento de mensaje principal
client.on("messageCreate", async (message) => {
    const prefix = "!";

    if(message.author.id === client.user.id) return;
    console.log(message.content)

    if(message.channel.name != "as") return;
    client.guilds.cache.forEach((g) => {
    //Interchat        
    

    const embed1 = new EmbedBuilder()
    .setAuthor({
        name: message.author.username,
        iconURL: message.author.displayAvatarURL()
    })
    .setColor("Random")
    .setFooter({text:"Enviado desde " + message.guild.name, iconURL: message.guild.iconURL()})
    .setDescription(message.content)
    



    g.channels.cache.find((c) => c.name === "as")?.send({ embeds: [embed1]})
    })


    await message.delete()
    if(!message.content.startsWith(prefix)) return;
    let args = message.content.slice(prefix.length).trim().split(/ +/)
    const command = args.shift().toLocaleLowerCase();

   


})


client.login("TOKEN")