exports.run = (client, message, args, level) => {
  const fReason = args.slice().join(" ");
  if (!fReason) return message.channel.send(message.author + " " + "has paid their respects.")
  else {
    
    message.channel.send(message.author + " " + "has paid their respects for" + " " + fReason);
  }
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "f",
  category: "Fun",
  description: "Press F to pay respects.",
  usage: "f [respects]"
};