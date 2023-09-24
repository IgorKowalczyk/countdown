![Countdown.js](https://github.com/IgorKowalczyk/countdown/assets/49127376/06b07e58-b5c0-43aa-b193-c88d5d4a18b2)

<div align="center">
  <a aria-label="GitHub License" href="https://github.com/igorkowalczyk/countdown/blob/master/license.md">
    <img src="https://img.shields.io/github/license/igorkowalczyk/countdown?color=%2334D058&logo=github&style=flat-square">
  </a>
  <a aria-label="Version" href="https://github.com/igorkowalczyk/countdown/releases">
    <img src="https://img.shields.io/github/v/release/igorkowalczyk/countdown?color=%2334D058&logo=github&style=flat-square">
  </a>
  <a aria-label="NPM Downloads" href="https://npmjs.org/package/@igorkowalczyk/countdown">
    <img src="https://img.shields.io/npm/dt/@igorkowalczyk/countdown?style=flat-square&logo=npm&color=%2334D058">
  </a>
</div>

## 📥 Installation

```
npm install @igorkowalczyk/countdown
yarn add @igorkowalczyk/countdown
pnpm add @igorkowalczyk/countdown
```

> [!NOTE]
> This package can be used in both CommonJS and ESM environments.

## 📦 Usage

### ESM

```js
import Timer from "@igorkowalczyk/countdown";
const timer = new Timer();

timer.on("tick", (ms) => console.log("tick", ms));
timer.on("done", () => console.log("done!"));
timer.on("statusChanged", (status) => console.log("Status: ", status));

timer.start(20000); // Timer for 20s
```

### CommonJS

```js
const Timer = require("@igorkowalczyk/countdown");
const timer = new Timer();

timer.on("tick", (ms) => console.log("tick", ms));
timer.on("done", () => console.log("done!"));
timer.on("statusChanged", (status) => console.log("Status: ", status));

timer.start(20000); // Timer for 20s
```

## ⁉️ Issues

If you have any issues with this package please create [new issue here](https://github.com/igorkowalczyk/countdown/issues)

## 📥 Pull Requests

When submitting a pull request:

- Clone the repo.
- Create a branch off of master and give it a meaningful name (e.g. my-awesome-new-feature).
- Open a [pull request](https://github.com/igorkowalczyk/countdown/pulls) on [GitHub](https://github.com) and describe the feature or fix.

## 📋 License

This project is licensed under the MIT. See the [LICENSE](https://github.com/igorkowalczyk/countdown/blob/master/license.md) file for details
