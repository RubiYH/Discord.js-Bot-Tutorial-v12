module.exports = {
  name: "안녕", //명령어
  description: "hello world를 출력합니다.", //명령어에 대한 설명
  execute(message, args) { //실행할 코드
    message.channel.send("hello world");
  },
};