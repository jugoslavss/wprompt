module.exports = function prompt(
  text = "",
  { raw = false, questioner = "> " } = {}
) {
  return new Promise((resolve) => {
    if (!raw) console.log(text);
    const rl = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    rl.question(raw ? text : questioner, (answer) => {
      resolve(answer);
      rl.close();
    });
  });
};

module.exports.prompt = module.exports;
module.exports.raw = true;
