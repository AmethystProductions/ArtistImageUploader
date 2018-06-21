const tumblrLib = require("tumblr.js");
const electron = require("electron");
const request = require("request");
const {ipcRenderer} = electron;

var tumblr;

const credentials = require("./credentials.json");
const site = "amethystproductions.tumblr.com"

module.exports = {
    Authenticate: Authenticate,
    Upload: (description) => Upload(description)
};

function Authenticate(){
    //tumblr = new Tumblr();
    //window.location.href = "https://www.deviantart.com/oauth2/authorize";
    // request.post(
    //     "https://www.deviantart.com/oauth2/authorize",
    //     {
    //         response_type: "token", 
    //         client_id: credentials.deviantart.client_id,
    //         redirect_uri: "https://amethystproductions.github.io",
    //         state: "test"
    //     },
    //     (data) => console.log(data)
    // );
}

function Upload(description)
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