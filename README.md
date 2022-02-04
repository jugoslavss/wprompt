# Installation

```sh
npm i wprompt
```

# Usage

```js
const prompt = require("wprompt");

(async () => {
  console.log(`Your name is ${await prompt("What is your name?")}.`);
})();
// What is your name?
// > ???
// Your name is ???.
```

```js
const { prompt, raw } = require("wprompt");

(async () => {
  console.log(`Your name is ${await prompt("What is your name? ", { raw })}.`);
})();
// What is your name? ???
// Your name is ???.
```

```js
const prompt = require("wprompt");

(async () => {
  console.log(
    `Your name is ${await prompt("What is your name? ", { questioner: ": " })}.`
  );
})();
// What is your name?
// : ???
// Your name is ???.
```
