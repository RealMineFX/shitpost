const Command = require("../base/Command.js");

class F extends Command {
  constructor (client) {
    super(client, {
      name: "f",
      description: "Press f to pay respects!",
      usage: "f (respects)",
      aliases: [""]
    });
  }
async run (message, args, level) {
  const fReason = args.slice().join(" ");
  if (!fReason) return message.channel.send(message.author + " " + "has paid their respects.")
  else {
    
    message.channel.send(message.author + " " + "has paid their respects for" + " " + fReason);
    }
  }
}

module.exports = F;