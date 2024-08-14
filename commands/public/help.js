const { ChatInputCommandInteraction, SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, Collection, EmbedBuilder, StringSelectMenuBuilder, StringSelectMenuOptionBuilder, ActionRow, ComponentType, Embed,} = require("discord.js");


module.exports = {
    data: new SlashCommandBuilder()
    .setName("help")
    .setDescription("Comandos"),
    
    /**
     * 
     * @param {ChatInputCommandInteraction} interaction 
     */
    async execute(interaction){

           const embedMain = new EmbedBuilder()
           .setTitle("⌨ - Comandos")
           .setDescription("Visualiza los comandos del rbot")
           .setColor("Gold")
           .setFooter({
            text: "Made in Awekening S.B Gen 8",
            iconURL: null
           })

           const options = [
            {
                label: "Raids",
                placeholder: "Visualizar comandos de raids",
                value: "raid",
                emoji: "⚔️"
                
            },
            {
                label: "Herramientas",
                placeholder: "Herramientas utiles",
                value: "tool",
                emoji: "🔨"
                
            }
           ]







           const selectMenu = new StringSelectMenuBuilder()
           .setCustomId(interaction.user.id)
           .setMaxValues(1) // Allow only one option to be selected
           .setMinValues(0)
           .setPlaceholder(options[0].placeholder) // Set a placeholder
           .addOptions(options.map((op) => 
             new StringSelectMenuOptionBuilder() 
               .setDescription(op.placeholder)
               .setLabel(op.label)
               .setValue(op.value)
               .setEmoji(op.emoji)
           ));



        const actionRow = new ActionRowBuilder().addComponents(selectMenu)



        interaction.reply({
            embeds: [embedMain],
            components: [actionRow]
        })



        const filter = (interaction) => interaction.customId == interaction.user.id
        const collector = interaction.channel.createMessageComponentCollector({
            componentType: ComponentType.StringSelect,
            filter: filter,
            time: 60_000
        })


        collector.on("collect", async (i) => {
            if(!i.values.length){
                return
            }

            if(i.values[0] == "tool"){
                const embed = new EmbedBuilder()
                .setTitle("Comandos tools")
                .setDescription("**Slash Comamands**`\n[Usage] /setup\n[Description] Personaliza el bot r4id\n\n[Usage] /profile\n[Description] Observa tus estadisticas`")
                .setColor("Gold")
                .setImage("https://media.discordapp.net/attachments/1060263396416696463/1266929667500413008/banner.gif")
                .setFooter({
                    text: "Made in Awekening S.B Gen 8",
                    iconURL: null
                })
                i.update({ embeds: [embed]})
            }

            if(i.values[0] == "raid"){
                const embed = new EmbedBuilder()
                .setTitle("Comandos de r4id")
                .setDescription("**Slash Comamands**\n`[Usage] /raid`\n`[Description] Crea canales raid\n\n[Usage] /nuke\n[Description] Borra todos los canales y roles\n\n[Usage] /spam-all\n[Description] Spamea en todos los canales muchos mensajes`")
                .setColor("Gold")
                .setImage("https://media.discordapp.net/attachments/1060263396416696463/1266929667500413008/banner.gif")
                .setFooter({
                    text: "Made in Awekening S.B Gen 8",
                    iconURL: null
                })
                i.update({ embeds: [embed]})
            }
        })


    },
};