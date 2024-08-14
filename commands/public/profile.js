const { ChatInputCommandInteraction, SlashCommandBuilder, EmbedBuilder} = require("discord.js");
const { User} = require('../../schema/User')

module.exports = {
    data: new SlashCommandBuilder()
    .setName("profile")
    .setDescription("Ve tu perfil"),
    /**
     * 
     * @param {ChatInputCommandInteraction} interaction 
     */
    async execute(interaction){

       const user = await User.findOne({ id: interaction.user.id})
       if(!user){
        await new User({
            username: interaction.user.username,
            id: interaction.user.id,
        }).save()
       }




       const embed = new EmbedBuilder()
       .setAuthor({
        name: interaction.user.username,
        iconURL: interaction.user.displayAvatarURL()
       })
       .setDescription("Información del perfil")
       .setColor("Green")
       .addFields(
        {
            name: "Rango",
            value: user.rank.toString(),
            inline: true
        },
        {
            name: "Insignias",
            value: "Ninguna",
            inline: true
        },
        {
            name: "R4ids",
            value:  user.historyRaids.length.toString(),
            inline: true
        },
        {
            name: "Canales",
            value: user.setup.channelName  || "Ninguno",
            inline: true
        },
        {
            name: "Mensajes",
            value: user.setup.messageContent || "Ninguno",
            inline: true
        }
       )
       .setImage("https://media.discordapp.net/attachments/1060263396416696463/1266929667500413008/banner.gif")

       .setFooter({
        text: "Made in Awekening S.B Gen 8",
        iconURL: interaction.user.displayAvatarURL()
       })



       interaction.reply({
        embeds: [embed]
       })




    },
};