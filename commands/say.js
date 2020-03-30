const Command = require("../base/Command.js");

class Say extends Command {
  constructor (client) {
    super(client, {
      name: "say",
      description: "Make Shitpost say something.",
      usage: "say (Phrase)",
      aliases: [""]
    });
  }
  
async run (client, message, args, level) {
  message.channel.send(args.join(" "));
  message.delete().catch(O_o => {});
  }
}
module.exports = Say;