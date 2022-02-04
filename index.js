module.exports = function prompt(
  text = "",
  { raw = false, questioner = "> " } = { raw: false, questioner: "> " }
) {
  if (raw) {
    return new Promise((resl) => {
      const Readline = require("readline").createInterface({
        input: process.stdin,
        output: process.stdout,
      });
      Readline.question(text, (res) => {
        resl(res);
        Readline.close();
      });
    });
  } else {
    return new Promise((resl) => {
      console.log(text);
      const Readline = require("readline").createInterface({
        input: process.stdin,
        output: process.stdout,
      });
      Readline.question(questioner, (res) => {
        resl(res);
        Readline.close();
      });
    });
  }
};

module.exports.prompt = module.exports;
module.exports.__defineGetter__("raw", () => true);
