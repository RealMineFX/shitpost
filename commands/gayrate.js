const Command = require("../base/Command.js");

class Gayrate extends Command {
  constructor (client) {
    super(client, {
      name: "gayrate",
      description: "See how gay you are.",
      usage: "gay (member)",
      aliases: ["gay"]
    });
  }
  
async run(message, args, level) {
  const randomnumber = Math.floor(Math.random() * 101);
  
  const gay = args.join(" ");
  
  if (!gay) {
    message.channel.send(`${message.author} is ${randomnumber}% gay!`)
  } else if (gay === "<@303376830289805313>") {
    message.channel.send(`<@303376830289805313> is 100% gay!`)
  } else if (gay === "<@497909398203531284>") {
    message.channel.send(`<@497909398203531284> is 0% gay!`)
  } else if (gay === "<@458617321158737921>") {
    message.channel.send(`<@458617321158737921> is 100% gay!`)
  } else {
    message.channel.send(`${args} is ${randomnumber}% gay!`)
    }
  }
}

module.exports = Gayrate;