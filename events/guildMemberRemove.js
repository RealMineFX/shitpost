const Discord = require("discord.js");

module.exports = (client, member) => {
  
  const settings = client.getSettings(member.guild);
  
  const welcomechannel = settings.welcomechannel;
  
  if (!welcomechannel) return;
  console.log(settings);
  
  const leaveEmbed = new Discord.RichEmbed()
    .setTitle("Member Left")
    .setDescription(`${member.user} left the guild!`)
    .setThumbnail(member.displayAvatarURL)
    .setColor(0xff0000)
    .setTimestamp()
    .setFooter("Shitpost, OverThrow Development", "https://cdn.discordapp.com/avatars/688459408107110425/aa2ce1d9374de6fc0dd28d349ca135af.png?size=2048");
  member.guild.channels.find(c => c.name === welcomechannel).send(embed);
  
};