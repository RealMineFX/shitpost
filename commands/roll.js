exports.run = (client, message, args, level) => {
  message.channel.send(`You rolled a ${Math.floor(Math.random() * 6) + 1}!`)
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "roll",
  category: "Fun",
  description: "Roll a dice.",
  usage: "roll"
};