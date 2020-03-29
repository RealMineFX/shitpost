module.exports = (client, member) => {

  const Discord = require("discord.js");
  const settings = client.getSettings(member.guild);
  
  if (!settings.welcomechannel) return;
  console.log(settings);
  if (settings.welcomechannel === null) {
    return;
  }
  const welcomemessage = new Discord.RichEmbed()
    .setTitle("Member Joined")
    .setDescription(settings.welcomemessage.replace("{{user}}", member.user.tag))
    .setThumbnail(member.user.displayAvatarURL)
    .setColor(0x00ab66)
    .setTimestamp()
    .setFooter("Shitpost, OverThrow Development", "https://cdn.discordapp.com/avatars/688459408107110425/aa2ce1d9374de6fc0dd28d349ca135af.png?size=2048");
  client.channels
    .find(c => c.name === settings.welcomechannel)
    .send(welcomemessage)
    .catch(console.error);
  
  if (settings.autoroleenabled === "true") {
    const role = member.guild.roles.find(r => r.name === settings.autorole)
    member.addRole(role);
  }
};
