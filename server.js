const login = require("facebook-chat-api");
const aws = require('aws-sdk');
var keepAliveModule = require("./keepAlive");
var twitchEmotesModule = require("./twitchEmotes");

keepAliveModule.keepAlive();

let s3 = new aws.S3({
  accessKeyId: process.env.MAIL,
  secretAccessKey: process.env.SECRET
});

login({email: s3.config.accessKeyId, password: s3.config.secretAccessKey}, (err, api) => {
  if(err) return console.error(err);

  api.setOptions({
        logLevel: "silent"
    });


  api.listen((err, message) => {
    if (message) {
      // console.log(message);

      // Twitch
      twitchEmotesModule.twitchEmotes(api, message);
    }
  });
});