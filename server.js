const express = require('express');
const app = express();
const axios = require('axios');
const url = require('url');





app.get("/api/auth", async (req, res) => {
    const { code } = req.query;

    if(code){
       console.log(code.toString())
        const formData = new url.URLSearchParams({
            client_id: "1266529313579077703",
            client_secret: "d4cAXeIkmYilzmR8xUYz9Aidjx_yreWG",
            grant_type: "authorization_code",
            code: code.toString(),
            redirect_uri: "http://localhost:3001/api/auth"
        })

        const output = await axios.post("https://discord.com/api/v10/oauth2/token", formData, { headers: {   "Content-Type": "application/x-www-form-urlencoded"}})

        if(output.data){
            const access = output.data.access_token;

            const userInfo = await axios.get("https://discord.com/api/v10/users/@me", {
                headers: {
                    "Authorization": "Bearer " + access
                }
            });

            console.log(output.data, userInfo.data)
        }
    }
})


app.listen(3001, () => console.log("Server is runnning in PORT 3001"))





