module.exports = {
  name: "hello",
  description: '"hello!"라고 답장합니다.',
  execute(message, args) {
    message.reply("hello!");
  },
};
