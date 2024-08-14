const { ChatInputCommandInteraction, SlashCommandBuilder} = require("discord.js");


module.exports = {

    data: new SlashCommandBuilder()
    .setName("invite")
    .setDescription("Invitación del bot"),
    /**
     * 
     * @param {ChatInputCommandInteraction} interaction 
     */
    execute(interaction){

        interaction.reply({ content: `[Invitame](https://discord.com/oauth2/authorize?client_id=${interaction.client.user.id}&scope=bot&permissions=8)`, ephemeral: true});




    },
};
