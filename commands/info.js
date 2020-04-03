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
    .addField("Dashboard", "https://shitpost-class.glitch.me")
    .addField("Support Server", "https://discord.gg/HUn9J3X")
    .addField("Invite", "Visit the dashboard and select `Add to Server`")
    .addField("Status", "https://status.shitpost.overthrowdev.com")
    .addField("Bugs", "https://github.com/OverThrowDev/shitpost/issues")
    .addField("Contributors", "OverThrow | AdminRAT")
    .setThumbnail(client.displayAvatarURL)
    .setColor(0x00ACEE)
    .setTimestamp()
    .setFooter("Shitpost, OverThrow Development")
  return message.channel.send(embed)
  }
}

module.exports = Info;