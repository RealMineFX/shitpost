const Discord = require("discord.js")
exports.run = (client, message, args, level) => {
  const embed = new Discord.RichEmbed()
    .setTitle("Info")
    .setDescription("The shittiest bot known to Discord.")
    .addField("Creator", "OverThrow Development")
    .addField("Engine", "Discord.js")
    .addField("Host", "Glitch.com")
    .addField("Website", "https://overthrowdev.com")
    .addField("Developers", "OverThrow | AdminRAT")
    .addField("Testers", "The members of DarthLilo's server.")
    .addField("Support Server", "[READACTED]")
    .addField("Invite Link", "[READACTED]")
    .setThumbnail(client.displayAvatarURL)
    .setColor(0x00ACEE)
    .setTimestamp()
    .setFooter("Shitpost, OverThrow Development")
  return message.channel.send(embed)
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "info",
  category: "Misc",
  description: "Display the info of Shitpost.",
  usage: "info"
};