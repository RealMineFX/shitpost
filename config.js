const config = {
  "admins": [],
  "support": [],
  "token": process.env.TOKEN,
  "dashboard" : {
    "oauthSecret": process.env.OAUTH,
    "callbackURL": 'http://shitpost.overthrowdev.com/callback',
    "sessionSecret": "shitpost-bot",
    "domain": "shitpost.overthrowdev.com",
    "port": 3000
  },
  defaultSettings: {
    "prefix": ";",
    "modrole": "Moderator",
    "adminrole": "Administrator",
    "systemnotice": "true", // This gives a notice when a user tries to run a command that they do not have permission to use.
    "welcomechannel": "welcome",
    "welcomemessage": "Say hello to {{user}}, everyone! We all need a warm welcome sometimes :D",
    "welcomeenabled": "true",
    "modlog": "mod-log",
    "autorole": "member",
    "autoroleenabled":"false"
},
  permLevels: [
    { level: 0,
      name: "User", 
      check: () => true
    },
    { level: 2,
      name: "Moderator",
      check: (message) => {
        try {
          const modRole = message.guild.roles.find(r => r.name.toLowerCase() === message.settings.modRole.toLowerCase());
          if (modRole && message.member.roles.has(modRole.id)) return true;
        } catch (e) {
          return false;
        }
      }
    },
    { level: 3,
      name: "Administrator", 
      check: (message) => {
        try {
          const adminRole = message.guild.roles.find(r => r.name.toLowerCase() === message.settings.adminRole.toLowerCase());
          return (adminRole && message.member.roles.has(adminRole.id));
        } catch (e) {
          return false;
        }
      }
    },
    { level: 4,
      name: "Server Owner", 
      check: (message) => message.channel.type === "text" ? (message.guild.owner.user.id === message.author.id ? true : false) : false
    },
    { level: 8,
      name: "Bot Support",
      check: (message) => config.support.includes(message.author.id)
    },
    { level: 9,
      name: "Bot Admin",
      check: (message) => config.admins.includes(message.author.id)
    },
    { level: 10,
      name: "Bot Owner", 
      check: (message) => message.client.appInfo.owner.id === message.author.id
    }
  ]
};

module.exports = config;
