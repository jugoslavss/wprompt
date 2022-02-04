# Installation

```sh
npm i wpromptjs
```

# Usage

```js
const prompt = require("wpromptjs");

(async () => {
  console.log(`Your name is ${await prompt("What is your name?")}.`);
})();
// What is your name?
// > ???
// Your name is ???.
```

```js
const { prompt, raw } = require("wpromptjs");

(async () => {
  console.log(`Your name is ${await prompt("What is your name? ", { raw })}.`);
})();
// What is your name? ???
// Your name is ???.
```

```js
const prompt = require("wpromptjs");

(async () => {
  console.log(
    `Your name is ${await prompt("What is your name? ", { questioner: ": " })}.`
  );
})();
// What is your name?
// : ???
// Your name is ???.
```
