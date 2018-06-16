const fs = require("fs");
const tumblrLib = require("tumblr.js");
const electron = require("electron");
const {ipcRenderer} = electron;

var credentials = "";

fs.readFile("credentials.json", (err, data) => {
    if (err)
    {
        console.log("Error reading file: " + err.message);
    }
    else
    {
        credentials = JSON.parse(data);
        console.log(credentials);
    }
});

module.exports = {
    Authenticate: () => {
        console.log("AUTHEN");
        Authenticate();
    }
};

function Authenticate()
{
    const tumblr = new Tumblr();
    var blog = tumblr.client.blogPosts("/info", {hostname: "amethystproductions.tumblr.com"})
    console.log(blog);
    console.log("end");
}

class Tumblr
{
    constructor()
    {
        this.client = tumblrLib.createClient({
          consumer_key: credentials.tumblr.consumer_key,
          consumer_secret: credentials.tumblr.consumer_secret,
          token: credentials.tumblr.token,
          token_secret: credentials.tumblr.token_secret
        });
    }
}