exports.run = (client, message, [firstNumber, operator, secondNumber], level) => {
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

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["calc"],
  permLevel: "User"
};

exports.help = {
  name: "calculate",
  category: "Fun",
  description: "I am a calculator",
  usage: "EX. 1 + 1"
};