const { loadCommands} = require("../../handlers/commandLoader");


module.exports = {
    name: "ready",
    once: true,
    execute(client){
     console.log("Cliente cargado como "+ client.user.username)



        loadCommands(client);
    },
};