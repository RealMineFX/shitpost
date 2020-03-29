exports.run = (client, message, args, level) => {
  message.channel.send(args.join(" "));
  message.delete().catch(O_o => {});
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "say",
  category: "Fun",
  description: "Control Shitpost!",
  usage: "say [message]"
};