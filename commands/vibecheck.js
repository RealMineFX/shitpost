exports.run = (client, message, args, level) => {
  const person = args.slice().join(" ");
  
  if (!person) return message.channel.send("https://overbot.xyz/bot-assets/vibecheck.gif")
  
  message.channel.send(`${message.author} is vibechecking ${person}! https://overbot.xyz/bot-assets/vibecheck.gif`)
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "vibecheck",
  category: "Fun",
  description: "Vibecheck!",
  usage: "vibecheck [person]"
};