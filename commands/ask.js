exports.run = (client, message, args, level) => {
  const answer = Math.floor(Math.random() * 2)
  
  if (answer === 0) return message.channel.send("Yes");
  if (answer === 1) return message.channel.send("No");
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "ask",
  category: "Fun",
  description: "Ask shitpost a yes or no question.",
  usage: "ask [question]"
};