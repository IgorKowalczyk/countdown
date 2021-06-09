# Countdown.js
Typescript countdown & stopwatch script.

> Note: The package has been renamed from `countdown.js` to `countdown`! Some links may return 404, i'm working to fix that (now you can't download the package from eg. npm source)

[![Jekyll](https://img.shields.io/github/workflow/status/igorkowalczyk/countdown/typescript?style=flat-square&logo=github&color=%2334D058)](https://igorkowalczyk.github.io/countdown)
[![GitHub License](https://img.shields.io/github/license/igorkowalczyk/countdown?color=%2334D058&logo=github&style=flat-square)](https://igorkowalczyk.github.io/countdown/license.txt)
[![Version](https://img.shields.io/github/v/release/igorkowalczyk/countdown?color=%2334D058&logo=github&style=flat-square)](https://github.com/igorkowalczyk/countdown/releases)
[![Discord](https://img.shields.io/discord/666599184844980224?color=%2334D058&logo=discord&style=flat-square&logoColor=7289da)](https://igorkowalczyk.github.io/majobot/server)

## Install
**Node.js 10x or newer is required!**<br>
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
timer.on('statusChanged', (status) => console.log('status:', status))

timer.start(20000) // Timer for 20s
```

## Build
#### Package
 - To build the script to `/dist` folder run `npm run build`
#### Docs
 - To build the dosc please run `npm run docs`

## Links
 - [Docs](https://igorkowalczyk.github.io/countdown)
 - [NPM Package](https://npmjs.org/package/@igorkowalczyk/countdown)
 - [Yarn Package](https://yarnpkg.com/package/@igorkowalczyk/countdown)
 - [Discord server](https://majoexe.herokuapp.com/server)

## Issues
If you have any issues with this package please create [new issue here](https://github.com/igorkowalczyk/countdown/issues)

## Pull Requests
When submitting a pull request:
- Clone the repo.
- Create a branch off of master and give it a meaningful name (e.g. my-awesome-new-feature).
- Open a [pull request](https://github.com/igorkowalczyk/countdown/pulls) on [GitHub](https://github.com) and describe the feature or fix.

## License
This project is licensed under the MIT. See the [LICENSE](https://github.com/igorkowalczyk/countdown/blob/master/license.txt) file for details

--- 
> Note: This is my first TypeScript project
