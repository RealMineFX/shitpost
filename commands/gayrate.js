exports.run = (client, message, args, level) => {
  const randomnumber = Math.floor(Math.random() * 101);
  
  const gay = args.join(" ");
  
  if (!gay) {
    message.channel.send(`${message.author} is ${randomnumber}% gay!`)
  } else if (gay === "<@303376830289805313>") {
    message.channel.send(`<@303376830289805313> is 100% gay!`)
  } else if (gay === "<@497909398203531284>") {
    message.channel.send(`<@497909398203531284> is 0% gay!`)
  } else {
    message.channel.send(`${args} is ${randomnumber}% gay!`)
  }
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "gayrate",
  category: "Fun",
  description: "Shitpost will determine how gay you are.",
  usage: "gayrate"
};