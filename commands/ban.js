const Discord = require("discord.js");
const Command = require("../base/Command.js");

class Ban extends Command {
  constructor (client) {
    super(client, {
      name: "ban",
      description: "Bans a member in the guild. !!Incomplete!!",
      usage: "ban (member)",
      aliases: ["remove"],
      permLevel: "Administrator"
    });
  }

async run(client, message, args, level) {
  const modlog = client.settings.get(message.guild.id).modlog;
  
  const user = message.mentions.users.first();
  
  const member = message.guild.member(user);
  
  let reason = args.slice(1).join(" ");
  
  if (!user) return message.reply(":x: You must mention a valid user in the guild!");
  
  if (!reason) reason = "No reason provided";
  
  const embed = new Discord.RichEmbed()
    .setTitle("Member Banned")
    .setThumbnail(member.user.displayAvatarURL)
    .addField("Member", member.tag)
    .addField("Reason", reason)
    .addField("Executor", message.author.tag)
    .setColor(0xFF0000)
    .setFooter("Shitpost, OverThrow Development", "https://cdn.discordapp.com/avatars/688459408107110425/aa2ce1d9374de6fc0dd28d349ca135af.png?size=2048");
  
  member
    .ban( {reason: reason} )
    .then(() => {
      message.reply(`:white_check_mark: Successfully kicked ${member} for ${reason}!`);
      client.channels.get(message.guild.channels.find(c => c.name === modlog).id).send(embed);
    })
    .catch(err => {
      message.reply(`:x: Hmm, I could not ban ${member} for ${err}!`);
    });
  };
};

module.exports = Ban;