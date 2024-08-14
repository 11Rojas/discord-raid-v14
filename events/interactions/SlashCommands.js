const { ChatInputCommandInteraction } = require("discord.js");


module.exports = {
    name: "interactionCreate",
    /**
     * 
     * @param { ChatInputCommandInteraction} interaction 
     */
    execute(interaction, client) {

        if (!interaction.isChatInputCommand()) return;

        const command = client.commands.get(interaction.commandName);
        if (!command)
            return interaction.reply({
                content: ":x: `|` This command is outdated",
                ephemeral: true,
            });

            if(command.developer && interaction.user.id != "814687605018984468")
                return interaction.reply({
            content: ":x: `|` Este comando es solo para el desarrollador",
            ephemeral: true,
        })

        command.execute(interaction, client)

    }
}







