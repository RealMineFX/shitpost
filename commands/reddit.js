const Discord = require("discord.js");
const request = require("request");
const Command = require("../base/Command.js");

class Reddit extends Command {
  constructor (client) {
    super(client, {
      name: "reddit",
      description: "Send a post from a specific subreddit.",
      usage: "reddit (subreddit)",
      aliases: [""]
    });
  }
async run (message, args, level) {
  const subreddit = args.join(" ");
  if (!subreddit) return message.reply(":x: Please provide a valid subreddit!");

  // Start typing
  message.channel.startTyping();

  request("https://www.reddit.com/r/"+ subreddit + "/random/.json", { json: true }, function(err, res, body) {
    if (err) return console.error(err);
    const post = body[0].data.children[0].data;
    const url = `https://reddit.com${post.permalink}`;
    const image = post.url;
    const title = post.title;
    const upvotes = post.ups;
    const downvotes = post.downs;
    const comments = post.num_comments;

    const embed = new Discord.RichEmbed()
      .setColor(0xFF5700)
      .setImage(image)
      .addField(title, `[View Thread](${url})`)
      .setFooter(`\u{1F44D} ${upvotes} \u{1F44E} ${downvotes} \u{1F5E8} ${comments}`);
    console.log(`Sent a reply to ${message.author.username}`);

    // Send the finished embed and stop typing
    message.channel.send(embed);
    })
  message.channel.stopTyping();
  };
};

module.exports = Reddit;