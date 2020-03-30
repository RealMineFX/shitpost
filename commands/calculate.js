const Command = require("../base/Command.js");

class Calculate extends Command {
  constructor (client) {
    super(client, {
      name: "calculate",
      description: "Calculate a mathmatical equation.",
      usage: "calculate (#1 + operator + #2)",
      aliases: ["calc"]
    });
  }
  
async run (client, message, [firstNumber, operator, secondNumber], level) {
  if (!firstNumber) return message.channel.send(":x: Please list your first value!");
  if (!operator) return message.channel.send(":x: Please list your operator!");
  if (!secondNumber) return message.channel.send(":x: Please list your second value!");

  if (operator === "+") {
    return message.channel.send(parseInt(firstNumber) + parseInt(secondNumber));
  } else
  if (operator === "-") {
    return message.channel.send(parseInt(firstNumber) - parseInt(secondNumber));
  } else
  if (operator === "*"  || operator === "x" ) {
    return message.channel.send(parseInt(firstNumber) * parseInt(secondNumber));
  } else
  if (operator === "/") {
    return message.channel.send(parseInt(firstNumber) / parseInt(secondNumber));
  } else return message.channel.send(":x: That is not a valid operator.");
  };
};

module.exports = Calculate;