// This event executes when a new member joins a server. Let's welcome them!
const Discord = require("discord.js")
module.exports = class {
  constructor(client) {
    this.client = client;
  }

  async run(member) {
    const client = new Discord.Client();
  // Load the guild's settings
    const settings = this.client.getSettings(member.guild);
    const channel = member.guild.channels.find(c => c.name === settings.welcomechannel);
    if (!channel) return
    // If welcome is off, don't proceed (don't welcome the user)
    if (settings.welcomeenabled !== "true") return;
    
    const embed = new Discord.RichEmbed()
      .setTitle("New Member")
      .setDescription(settings.welcomemessage)
      .setTimestamp();
    client.channels.find(channel).send(embed);
  }
};
