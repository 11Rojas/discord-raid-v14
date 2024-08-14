const { Schema, model, default: mongoose} = require('mongoose');


const User = new Schema({
    username: String,
    id: String,
    historyRaids: [
        {
            guildId: String,
            members: Number,
            createdAt: {type: Date}
        }
    ],
    rank: { type: Number, default: 0},
    setup: {
        channelName: {
            type: String,
            default: "Possessed by Awekening"
        },
        messageContent: {
            type: String,
            default: "https://discord.gg/x9r58C3mne"
        }
    },
    createdAt: Date,
    premium: {
        createdAt: Date,
        duration: Number,
        isActive: Boolean
    },
    badges: []
})




module.exports = {
    User: model("User", User)
}