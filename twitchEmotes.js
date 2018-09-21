const fs = require("fs");

module.exports.twitchEmotes = function (api, message) {

  // Special
  if (message.body.toLowerCase().includes("!sauvage")) {
    var msg = {
      body: "",
      attachment: fs.createReadStream('img/sauvage.png')
    }
    api.sendMessage(msg, message.threadID);
  }

  //dsl
  if (message.body.toLowerCase().includes("!dsl")) {
    var msg = {
      body: "",
      attachment: fs.createReadStream('img/dsl.png')
    }
    api.sendMessage(msg, message.threadID);
  }

  // Twitch
  if (message.body.includes("Kappa")) {
    var msg = {
      body: "",
      attachment: fs.createReadStream('img/Kappa.png')
    }
    api.sendMessage(msg, message.threadID);
  }

  if (message.body.includes("DansGame")) {
  	var msg = {
    	body: "",
   	  attachment: fs.createReadStream('img/DansGame.png')
  	}
  	api.sendMessage(msg, message.threadID);
	}

	if (message.body.includes("FailFish")) {
    var msg = {
      body: "",
      attachment: fs.createReadStream('img/FailFish.png')
    }
    api.sendMessage(msg, message.threadID);
  }

  if (message.body.includes("Kreygasm")) {
    var msg = {
      body: "",
      attachment: fs.createReadStream('img/Kreygasm.png')
    }
    api.sendMessage(msg, message.threadID);
  }

  if (message.body.includes("PogChamp")) {
    var msg = {
      body: "",
      attachment: fs.createReadStream('img/PogChamp.png')
    }
    api.sendMessage(msg, message.threadID);
  }

  if (message.body.includes("SwiftRage")) {
    var msg = {
      body: "",
      attachment: fs.createReadStream('img/SwiftRage.png')
    }
    api.sendMessage(msg, message.threadID);
  }


}