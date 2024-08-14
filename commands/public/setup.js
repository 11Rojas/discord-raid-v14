const { ChatInputCommandInteraction, SlashCommandBuilder, ModalBuilder, TextInputBuilder, TextInputStyle, ActionRowBuilder} = require("discord.js");
const { User } = require('../../schema/User')

module.exports = {
    data: new SlashCommandBuilder()
    .setName("setup")
    .setDescription("Configura el bot con canales y contenido de los mensajes"),
    /**
     * 
     * @param {ChatInputCommandInteraction} interaction 
     */
   async execute(interaction){
    try {

        //Buscar si existe el usuario en la db sino crear
        const user = await User.findOne({ id: interaction.user.id });
        if(!user){
            await new User({
                id: interaction.user.id,
                username: interaction.user.username
            }).save()
        }






        await interaction.channel.send({ content: "Hahahah"})









        const modal = new ModalBuilder()
        .setCustomId("modalSetup-" + interaction.user.id)
        .setTitle("Setup del bot")


        const channelName = new TextInputBuilder()
        .setCustomId("channelName")
        .setStyle(TextInputStyle.Short)
        .setLabel("Agrega el nombre del canal para tus r4ids")

        const messageContent = new TextInputBuilder()
        .setCustomId("messageContent")
        .setStyle(TextInputStyle.Short)
        .setLabel("Agrega el contenido de los mensajes")


        const firstActionRow  = new ActionRowBuilder().addComponents(channelName)
        const secondActionRow = new ActionRowBuilder().addComponents(messageContent)


        modal.addComponents(firstActionRow, secondActionRow)


        await interaction.showModal(modal)



        const filter = (interaction) => interaction.customId == "modalSetup-"+interaction.user.id
    
            const i = await interaction.awaitModalSubmit({ filter, time: 30_000 });
            const channelValue = i.fields.getTextInputValue("channelName");
            const messageValue = i.fields.getTextInputValue("messageContent");

                user.setup.channelName = channelValue;
                user.setup.messageContent = messageValue;
                await user.save()

            i.reply({
                content: "Datos actualizados con éxito",
                ephemeral: true
            })
          } catch (error) {
            console.error(error);
          }

      

       
       

    },
};