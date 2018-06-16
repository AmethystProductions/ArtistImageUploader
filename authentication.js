const tumblrLib = require("tumblr.js");
const electron = require("electron");
const {ipcRenderer} = electron;


const credentials = require("./credentials.json");

module.exports = {
    Authenticate: Authenticate
};

function Authenticate(){
    console.log("AUTHEN start");
    ipcRenderer.send("data", "AUTHEN START");
    const tumblr = new Tumblr();
    // Async
    tumblr.client.blogPosts("staff.tumblr.com", function(err, data) {
        ipcRenderer.send("data", data);
    });
    //console.log(blog);
    console.log("AUTHEN end");
}

class Tumblr {
    constructor() {
        this.client = tumblrLib.createClient({
          consumer_key: credentials.tumblr.consumer_key,
          consumer_secret: credentials.tumblr.consumer_secret,
          token: credentials.tumblr.token,
          token_secret: credentials.tumblr.token_secret
        });
    }
}

Authenticate();