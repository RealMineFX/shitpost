const Command = require("../base/Command.js");

class Ball extends Command {
  constructor (client) {
    super(client, {
      name: "8ball",
      description: "Find the answered to the most mysterious questions with the 8 ball!",
      usage: "8ball (question)",
      aliases: [""]
    });
  }
  
async run(message, args, level) {
  const responses = [
    "As I see it, yes.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don’t count on it.",
    "It is certain.",
    "It is decidedly so.",
    "Most likely.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Outlook good.",
    "Reply hazy, try again.",
    "Signs point to yes.",
    "Very doubtful.",
    "Without a doubt.",
    "Yes.",
    "Yes – definitely.",
    "You may rely on it."
  ]
  
  message.channel.send(responses[Math.floor(Math.random() * responses.length)]);
  }
}
module.exports = Ball;