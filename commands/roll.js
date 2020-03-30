const Command = require("../base/Command.js");

class Roll extends Command {
  constructor (client) {
    super(client, {
      name: "roll",
      description: "Roll a dice!",
      usage: "roll",
      aliases: ["dice"]
    });
  }
async run(message, args, level) {
  message.channel.send(`You rolled a ${Math.floor(Math.random() * 6) + 1}!`)
  }
};

module.exports = Roll;