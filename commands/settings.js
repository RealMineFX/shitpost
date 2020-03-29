exports.run = async (client, message, [key, ...value], level) => { // eslint-disable-line no-unused-vars

  const settings = message.settings;
  const defaults = client.settings.get("default");
  const overrides = client.settings.get(message.guild.id);
  if (!client.settings.has(message.guild.id)) client.settings.set(message.guild.id, {});
  
  if (!key) {
    const array = [];
    Object.entries(settings).forEach(([key, value]) => {
      array.push(`${key}${" ".repeat(20 - key.length)}::  ${value}`); 
    });
    await message.channel.send(`= Current Guild Settings =\n${array.join("\n")}`, {code: "asciidoc"});
  } else {
    if (!key) return message.reply("Please specify a key to edit");
    if (!defaults[key]) return message.reply("This key does not exist in the settings");
    const joinedValue = value.join(" ");
    if (joinedValue.length < 1) return message.reply("Please specify a new value");
    if (joinedValue === settings[key]) return message.reply("This setting already has that value!");
    
    if (!client.settings.has(message.guild.id)) client.settings.set(message.guild.id, {});

    client.settings.set(message.guild.id, joinedValue, key);

    message.reply(`${key} successfully edited to ${joinedValue}`);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["setting", "set", "conf"],
  permLevel: "Administrator"
};

exports.help = {
  name: "settings",
  category: "System",
  description: "View or change settings for your server.",
  usage: "set <view/get/edit> <key> <value>"
};
