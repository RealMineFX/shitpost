const Command = require("../base/Command.js");

class Joke extends Command {
  constructor (client) {
    super(client, {
      name: "joke",
      description: "Let Shitpost tell you a joke.",
      usage: "joke",
      aliases: ["haha"]
    });
  }
async run (message, args, level) {
  const responses = [
    "If you're American when you walk into the bathroom and you're American when you walk out, what are you when you're in the bathroom? European",
    "What do you call a can opener that doesn't work? A can't opener!",
    "What do you get when you combine a rhetorical question and a joke? HAHA if you tried to answer that, it's a rhetorical question...",
    "I sold my vacuum the other day, all it was doing was collecting dust...",
    "What did the drummer call his twin daughters? Anna one, Anna two!",
    "How did Darth Vader know what Luke got him for Christmas? He felt his presents!",
    "Did you hear about the chameleon who couldn't change color? He had a reptile dysfunction.",
    "I wanted to go on a diet, but I feel like I have way too much on my plate right now.",
    "Want to hear a joke about construction? I'm still working on it.",
    "What’s Forrest Gump’s password? 1forrest1",
    "What sound does a witches car make? Broom Broom",
    "To whoever stole my copy of Microsoft Office, I will find you. You have my Word!",
    "What does a zombie vegetarian eat? GRRRAAAIINS!",
    "This graveyard looks overcrowded. People must be dying to get in there.",
    "What does a nosey pepper do? It gets jalapeno business!",
    "I tell dad jokes, but I don't have any kids. I'm a faux pa."
  ];

  message.channel.send(responses[Math.floor(Math.random() * responses.length)]);
  };
};

module.exports = Joke;