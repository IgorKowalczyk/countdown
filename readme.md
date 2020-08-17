# Countdown.js
A simple and easy-to-use countdown.

[![Jekyll](https://github.com/igorkowalczyk/blog/workflows/Jekyll/badge.svg)](https://igorkowalczyk.github.io/countdown.js)
[![GitHub License](https://img.shields.io/github/license/igorkowalczyk/countdown.js?color=%2334D058&logo=github&logoColor=959DA5&labelColor=24292E)](https://igorkowalczyk.github.io/blog/license.txt)
[![Version](https://img.shields.io/github/v/release/igorkowalczyk/countdown.js?color=%2334D058&logo=github&logoColor=959DA5&labelColor=24292E)](https://github.com/igorkowalczyk/blog/releases)
[![Docs](http://inch-ci.org/github/igorkowalczyk/countdown.js.svg?branch=master)](https://igorkowalczyk.github.io/countdown.js)
[![Discord](https://img.shields.io/discord/666599184844980224?color=%2334D058&logo=discord&logoColor=7289da&labelColor=24292E)](https://discord.gg/f4KtqNB)


## How to use

Compiled and production-ready code can be found in the `download` directory.

### 1. Include `countdown.js` on your site

```html
<script src="path/to/countdown.min.js"></script>
```

### 2. Set end date
Choose a date that supports `JavaScript` in whatever format you like.

```javascript
var endDate = "2050/01/01";
```

### 3. Initialize countdown.js
In the footer of your page, after the content, initialize countdown.js. And that's it, you're done. Nice work!

```javascript
var myCountDown = new countdown(endDate, function (remaining, finished) {

  if (finished) {
    
    // countdown finished

  } else {

    // do something

  }

});
```

**Example 1**

```javascript
var myCountDown = new countdown("2050/01/01", function (remaining, finished) {

  if (finished) {
    
    document.body.innerHTML = "Expired";

  } else {

    document.body.innerHTML = remaining.hours + "h " + remaining.minutes + "m " + remaining.seconds + "s";

  }

});
```

**Example 2**

```javascript
var myCountDown = new countdown(new Date("2050-01-01T12:05:55Z"), function (remaining, finished) {

  if (finished) {
    
    document.body.innerHTML = "Expired";

  } else {

    document.body.innerHTML = remaining.hours + "h " + remaining.minutes + "m " + remaining.seconds + "s";

  }

});
```


### Use countdown.js events in your own scripts

You can also call countdown.js events in your own scripts.

#### init()
Initialize countdown.js This is called automatically when you setup your `new countdown` object, but can be used to reinitialize your instance.

```javascript
var myCountDown = new countdown(endDate, myCallback);

myCountDown.init(myDate, myFunction);
```

#### destroy()
Destroy the current `countdown.init()`. This is called automatically during the `init` function to remove any existing initializations.

```javascript
var myCountDown = new countdown(endDate, function (remaining, finished) { });

myCountDown.destroy();
```

### Callback parameters
The callback function has two parameters.

The first parameter contains the following calculations related to the countdown.

| Parameters   |
|--------------|
| seconds      |
| minutes      |
| hours        |
| days         |
| daysToWeek   |
| daysToMonth  |
| weeks        |
| weeksToMonth |
| months       |
| monthsToYear |
| years        |
| totalDays    |
| totalHours   |
| totalMinutes |
| totalSeconds |

The second parameter indicates whether the countdown is over.

# Issues
If you have any issues with the page please create [new issue here](https://github.com/igorkowalczyk/countdown.js/issues)

# Development
To set up your environment to develop this site, run `bundle install`.

To test the docs site, run `bundle exec rake preview` and open your browser at http://localhost:4000/dir/. This starts a Jekyll server using content in the `dir/` directory. As modifications are made to the site and test site, it will regenerate and you should see the changes in the browser after a refresh.

# Pull Requests
When submitting a pull request:

- Clone the repo.
- Create a branch off of master and give it a meaningful name (e.g. my-awesome-new-feature).
- Open a pull request on GitHub and describe the feature or fix.

# License
This project is licensed under the MIT License. See the [LICENSE](https://igorkowalczyk.github.io/countdown.js/license.txt) file for details

Created by [Igor Kowalczyk](https://igorkowalczyk.github.io)
