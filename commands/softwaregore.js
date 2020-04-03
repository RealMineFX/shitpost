const Discord = require("discord.js");
const request = require("request");
const Command = require("../base/Command.js");

class Softwaregore extends Command {
  constructor (client) {
    super(client, {
      name: "softwaregore",
      description: "Send a post from r/softwaregore",
      usage: "softwaregore",
      aliases: []
    });
  }

async run(message, args, level) {
  request("https://www.reddit.com/r/softwaregore/random/.json", { json: true }, function(err, res, body) {
    if (err) return console.error(err);
    const post = body[0].data.children[0].data;

    const url = `https://reddit.com${post.permalink}`;
    const image = post.url;
    const title = post.title;
    const upvotes = post.ups;
    const downvotes = post.downs;
    const comments = post.num_comments;
    
    message.channel.startTyping();

    const embed = new Discord.RichEmbed()
      .setColor(0xFF5700)
      .setImage(image)
      .addField(title, `[View Thread](${url})`)
      .setFooter(`\u{1F44D} ${upvotes} \u{1F44E} ${downvotes} \u{1F5E8} ${comments}`);

    console.log(`Sent a reply to ${message.author.username}`);
    return message.channel.send(embed);
    return message.channel.stopTyping();
    });
  };
};

module.exports = Softwaregore;
