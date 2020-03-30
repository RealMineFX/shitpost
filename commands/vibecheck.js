const Command = require("../base/Command.js");

class Vibecheck extends Command {
  constructor (client) {
    super(client, {
      name: "vibecheck",
      description: "Vibecheck someone",
      usage: "vibecheck (member)",
      aliases: [""]
    });
  }
async run (client, message, args, level) {
  const person = args.slice().join(" ");
  
  if (!person) return message.channel.send("https://overbot.xyz/bot-assets/vibecheck.gif")
  
  message.channel.send(`${message.author} is vibechecking ${person}! https://overbot.xyz/bot-assets/vibecheck.gif`)
  }
}
module.exports = Vibecheck;