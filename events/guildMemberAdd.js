// This event executes when a new member joins a server. Let's welcome them!
const Discord = require("discord.js")
module.exports = class {
  constructor(client) {
    this.client = client;
  }

  async run(member) {
  // Load the guild's settings
    const settings = this.client.getSettings(member.guild);
  
    // If welcome is off, don't proceed (don't welcome the user)
    if (settings.welcomeenabled !== "true") return;

    // Replace the placeholders in the welcome message with actual data
    const welcomeMessage = settings.welcomeMessage.replace("{{user}}", member.user.tag);

    // Send the welcome message to the welcome channel.
    // There's a place for more configs here.
    const embed = new Discord.RichEmbed()
      .setTitle("New Member")
      .setThumbnail()
    member.guild.channels.find("name", settings.welcomechannel).send(embed).catch(console.error);
  }
};
