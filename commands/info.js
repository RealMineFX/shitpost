const Discord = require("discord.js")
const Command = require("../base/Command.js");

class Info extends Command {
  constructor (client) {
    super(client, {
      name: "info",
      description: "Display the bot info.",
      usage: "info",
      aliases: ["information"]
    });
  }
async run(client, message, args, level) {
  const embed = new Discord.RichEmbed()
    .setTitle("Info")
    .setDescription("The shittiest bot known to Discord.")
    .addField("Creator", "OverThrow Development")
    .addField("Engine", "Discord.js")
    .addField("Host", "Glitch.com")
    .addField("Website", "https://overthrowdev.com")
    .addField("Developers", "OverThrow | AdminRAT")
    .addField("Testers", "The members of DarthLilo's server.")
    .addField("Dashboard", "https://shitpost-class.glitch.me")
    .addField("Support Server", "[READACTED]")
    .addField("Invite Link", "[READACTED]")
    .addField("Bugs", "https://github.com/OverThrowDev/shitpost/issues")
    .setThumbnail(client.displayAvatarURL)
    .setColor(0x00ACEE)
    .setTimestamp()
    .setFooter("Shitpost, OverThrow Development")
  return message.channel.send(embed)
  }
}

module.exports = Info;