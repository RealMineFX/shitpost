const Discord = require("discord.js");
const Command = require("../base/Command.js");

class Avatar extends Command {
  constructor (client) {
    super(client, {
      name: "avatar",
      description: "Display the avatar of a member in the guild!",
      usage: "avatar [user]",
      aliases: [""]
    });
  }
  
async run(message, args, level) {
  const user = message.mentions.users.first() || message.author;

  const embed = new Discord.RichEmbed()
    .setAuthor(user.username, user.displayAvatarURL)
    .setColor(0x00ACEE)
    .setImage(user.displayAvatarURL)
    .setTimestamp()
    .setFooter("Shitpost, OverThrow Development", "https://cdn.discordapp.com/avatars/688459408107110425/aa2ce1d9374de6fc0dd28d349ca135af.png?size=2048");
  return message.channel.send(embed);
  };
};

module.exports = Avatar;