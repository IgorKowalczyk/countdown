<img width="170" height="170" align="left" style="float: left; margin: 0 10px 0 0; border-radius: 50%;" alt="Countdown.js logo" src="https://github.com/IgorKowalczyk/is-browser/assets/49127376/bef245e0-6eaf-43bb-89df-09bd4ae80c463">

# Countdown.js

⏱️ Fast, accurate and lightweight countdown & stopwatch written in Typescript.

[![GitHub License](https://img.shields.io/github/license/igorkowalczyk/countdown?color=%2334D058&logo=github&style=flat-square)](https://github.com/igorkowalczyk/countdown/blob/master/license.md)
[![Version](https://img.shields.io/github/v/release/igorkowalczyk/countdown?color=%2334D058&logo=github&style=flat-square)](https://github.com/igorkowalczyk/countdown/releases)
[![NPM Downloads](https://img.shields.io/npm/dt/@igorkowalczyk/countdown?style=flat-square&logo=npm&color=%2334D058)](https://npmjs.org/package/@igorkowalczyk/countdown)

---

## 📥 Installation

> **Node.js 12x or newer is required!**

```
npm install @igorkowalczyk/countdown
yarn add @igorkowalczyk/countdown
pnpm add @igorkowalczyk/countdown
```

> **Note:**
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
