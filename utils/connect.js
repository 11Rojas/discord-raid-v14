const { connect } = require('mongoose');
const { MONGODB } = require("../config.json")



module.exports = {

    connect: async () => {
        try {
                await connect(MONGODB)
                console.log("Connected to MongoDB")
        } catch (error) {
            console.log(error)
        }
    }







}