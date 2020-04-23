const Command = require("../base/Command.js");
const Discord = require("discord.js");

class Ship extends Command {
  constructor(client) {
    super(client, {
      name: "ship",
      description: "Ship someone idk",
      category: "Fun",
      usage: "ship <@mention> <@mention>",
      permLevel: "User"
    });
  }

  async run(message, [user1, user2], level) {
    if (!user1) return message.reply("Uh? You have to mention the first person, duh!")
    if (!user2) return message.reply("You forgot the second person! You silly goose!")
    //These determine if you entered in the 2 arguments, member 1 and member 2
    const num = Math.floor(Math.random() * 101);
    //This is the number generated

    const embed = new Discord.RichEmbed()
        .setTitle("Ship")
        .setColor(0xe31b23)
        .addField("Person 1", user1)
        .addField("Person 2", user2)
        .addField("Ship Rating", `${num}%`)
        .setTimestamp()
        .setFooter("Shitpost")
    message.channel.send(embed);
  }
};

module.exports = Ship;