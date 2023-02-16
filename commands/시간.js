module.exports = {
  name: "시간",
  description: "현재 시간을 알려줍니다.",
  execute(message, args) {
    let now = new Date();
    message.channel.send(now.toLocaleString());
  },
};
