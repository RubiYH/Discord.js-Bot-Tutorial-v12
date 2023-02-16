module.exports = {
  name: "더하기",
  description: "입력한 두 수를 더해줍니다.",
  execute(message, args) {
    try {
      if (isNaN(args[1]) || isNaN(args[2]))
        return message.reply("숫자를 입력해주세요!");
      let result = parseInt(args[1]) + parseInt(args[2]);
      message.channel.send(`더하기 결과: ${result}`);
    } catch {
      message.channel.send("더하기에 실패하였습니다.");
    }
  },
};
