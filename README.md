# Countdown.js
Deadly simple countdown & stopwatch written in Typescript.

[![Typescript](https://img.shields.io/github/workflow/status/igorkowalczyk/countdown/Typescript?style=flat-square&logo=github&color=%2334D058)](https://igorkowalczyk.github.io/countdown)
[![GitHub License](https://img.shields.io/github/license/igorkowalczyk/countdown?color=%2334D058&logo=github&style=flat-square)](https://igorkowalczyk.github.io/countdown/license.txt)
[![Version](https://img.shields.io/github/v/release/igorkowalczyk/countdown?color=%2334D058&logo=github&style=flat-square)](https://github.com/igorkowalczyk/countdown/releases)
[![NPM Downloads](https://img.shields.io/npm/dt/@igorkowalczyk/countdown?style=flat-square&logo=npm&color=%2334D058)](https://npmjs.org/package/@igorkowalczyk/countdown)
[![Discord](https://img.shields.io/discord/666599184844980224?color=%2334D058&logo=discord&style=flat-square&logoColor=7289da)](https://redirect-majoexe.herokuapp.com/majo-v12)


## Install
**Node.js 6x or newer is required!**<br>
To install the package (latest version) run<br>
`npm install @igorkowalczyk/countdown` [[NPM](https://npmjs.org/package/@igorkowalczyk/countdown)]<br>
or<br>
`yarn install @igorkowalczyk/countdown` [[Yarn](https://yarnpkg.com/package/@igorkowalczyk/countdown)]

## Example usage
```js
const Timer = require('@igorkowalczyk/countdown')
const timer = new Timer()

timer.on('tick', (ms) => console.log('tick', ms))
timer.on('done', () => console.log('done!'))
timer.on('statusChanged', (status) => console.log('Status: ', status))

timer.start(20000) // Timer for 20s
```

## Features
- 📝 Dead simple
- ✨ Really fast
- 😅 Easy to use
- 📚 Build-in stopwatch
- 🕐 Custom running time

## Development
### Package
 - To build the script to `/dist` folder run `npm run build`
### Docs
 - To build the dosc please run `npm run docs`

## Links
 - [Docs](https://igorkowalczyk.github.io/countdown)
 - [NPM Package](https://npmjs.org/package/@igorkowalczyk/countdown)
 - [Yarn Package](https://yarnpkg.com/package/@igorkowalczyk/countdown)
 - [Discord server](https://redirect-majoexe.herokuapp.com/majo-v12)

## Issues
If you have any issues with this package please create [new issue here](https://github.com/igorkowalczyk/countdown/issues)

## Pull Requests
When submitting a pull request:
- Clone the repo.
- Create a branch off of master and give it a meaningful name (e.g. my-awesome-new-feature).
- Open a [pull request](https://github.com/igorkowalczyk/countdown/pulls) on [GitHub](https://github.com) and describe the feature or fix.

## License
This project is licensed under the MIT. See the [LICENSE](https://github.com/igorkowalczyk/countdown/blob/master/license.txt) file for details
