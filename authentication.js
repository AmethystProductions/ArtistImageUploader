const tumblrLib = require("tumblr.js");
const electron = require("electron");
const {ipcRenderer} = electron;

var tumblr;

const credentials = require("./credentials.json");
const site = "amethystproductions.tumblr.com"

module.exports = {
    Authenticate: Authenticate,
    Post: (description) => Post(description)
};

function Authenticate(){
    console.log("AUTHEN start");
    tumblr = new Tumblr();
    // tumblr.client.blogPosts("staff.tumblr.com", function(err, data) {
    //     ipcRenderer.send("data", data.posts[0].body);
    // });
}

function Post(description)
{
    tumblr.client.createTextPost(site, {title: "Title", body: "Body"});
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