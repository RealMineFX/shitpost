const Command = require("../base/Command.js");

class Ask extends Command {
  constructor (client) {
    super(client, {
      name: "ask",
      description: "Ask Shitpost a yes or no question.",
      usage: "ask (question)",
      aliases: [""]
    });
  }
  
async run (message, args, level) {
  const answer = Math.floor(Math.random() * 2)
  
  if (answer === 0) return message.channel.send("Yes");
  if (answer === 1) return message.channel.send("No");
  }
}

module.exports = Ask;