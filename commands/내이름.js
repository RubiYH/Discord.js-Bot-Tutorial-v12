module.exports = {
  name: "내이름",
  description: "내 이름을 알려줍니다.",
  execute(message, args) {
    message.channel.send(`당신의 이름은 ${message.author.username}입니다.`);
  },
};
