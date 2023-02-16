const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

client.on("ready", () => {
  console.log(config.loginMessage);
});

const prefix = config.prefix;

const fs = require("fs")
client.commands = new Discord.Collection();
const getCommandFiles = fs.readdirSync("./commands").filter((file) => file.endsWith(".js"));

for (const file of getCommandFiles) {
  let getCommand = require(`./commands/${file}`);
  client.commands.set(getCommand.name, getCommand)
}

client.on("message", (message) => {
  if(!message.content.startsWith(prefix)) return;
  if(message.author.bot) return;

  let args = message.content.substring(prefix.length).split(" ");
  let cmd = args[0].toLowerCase();

  if (client.commands.has(cmd)) {
    try {
      client.commands.get(cmd).execute(message, args);
    } catch (err) {
      message.channel.send("명령어 실행 중 오류가 발생하였습니다.");
      console.log(err);
    } 
  } else {
    message.channel.send("일 수 없는 명령어입니다.")
  }
});

client.login(config.token);
