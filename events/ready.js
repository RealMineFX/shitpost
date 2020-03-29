const { promisify } = require("util");
const client = require("discord.js")
module.exports = async client => {

  // This loop ensures that client.appInfo always contains up to date data
  // about the app's status. This includes whether the bot is public or not,
  // its description, owner, etc. Used for the dashboard amongs other things.


  // Check whether the "Default" guild settings are loaded in the enmap.
  // If they're not, write them in. This should only happen on first load.
  if (!client.settings.has("default")) {
    if (!client.config.defaultSettings)
      throw new Error(
        "defaultSettings not preset in config.js or settings database. Bot cannot load."
      );
    client.settings.set("default", client.config.defaultSettings);
  }

  // Initializes the dashboard, which must be done on ready otherwise some data
  // may be missing from the dashboard.
  require("../util/dashboard.js")(client);
  // Log that the bot is online.
  client.logger.log(
    `${client.user.tag}, ready to serve ${client.users.size} users in ${client.guilds.size} servers.`,
    "ready"
  );

  // Make the bot "play the game" which is the help command with default prefix.
  client.user.setActivity(`Early Testing v0.0.3`, { type: "PLAYING" });
};
