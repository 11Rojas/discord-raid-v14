async function loadCommands(client){
    const { loadFiles } = require("../functions/fileLoader");
    const ascii = require("ascii-table");
    const table = new ascii().setHeading("Commands", "Status");


    await client.commands.clear();


    let commandsArray = [];

    const Files = await loadFiles("commands");


    Files.forEach((files) => {
        const command = require(files);
        client.commands.set(command.data.name, command);

        commandsArray.push(command.data.toJSON());

        table.addRow(command.data.name, "✅")
    });

    client.application.commands.set(commandsArray);

    return console.log(table.toString(), "\nCommands Loaded");
}


module.exports = { loadCommands}