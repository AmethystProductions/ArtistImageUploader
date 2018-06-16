const tumblrLib = require("tumblr.js");
const electron = require("electron");
const {ipcRenderer} = electron;


const credentials = require("./credentials.json");

module.exports = {
    Authenticate: Authenticate
};

function Authenticate(){
    console.log("AUTHEN");
    const tumblr = new Tumblr();
    // Async
    tumblr.client.blogPosts(function(err, data) {
    });
    //console.log(blog);
    console.log("end");
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