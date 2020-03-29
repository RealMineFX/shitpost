const Discord = require("discord.js");
exports.run = (client, message, args, level) => {
  const user = message.mentions.users.first() || message.author;

  const embed = new Discord.RichEmbed()
    .setAuthor(user.username, user.displayAvatarURL)
    .setColor(0x00ACEE)
    .setImage(user.displayAvatarURL)
    .setTimestamp()
    .setFooter("Shitpost, OverThrow Development", "https://cdn.discordapp.com/avatars/688459408107110425/aa2ce1d9374de6fc0dd28d349ca135af.png?size=2048");
  return message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "avatar",
  category: "Fun",
  description: "Display the avatar of someone in the guild.",
  usage: "avatar [user])"
};