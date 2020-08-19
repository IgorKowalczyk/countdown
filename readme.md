# Countdown.js
A simple and easy-to-use countdown.

[![Jekyll](https://github.com/igorkowalczyk/countdown.js/workflows/Jekyll/badge.svg)](https://igorkowalczyk.github.io/countdown.js)
[![GitHub License](https://img.shields.io/github/license/igorkowalczyk/countdown.js?color=%2334D058&logo=github&logoColor=959DA5&labelColor=24292E)](https://igorkowalczyk.github.io/countdown.js/license.txt)
[![Version](https://img.shields.io/github/v/release/igorkowalczyk/countdown.js?color=%2334D058&logo=github&logoColor=959DA5&labelColor=24292E)](https://github.com/igorkowalczyk/countdown.js/releases)
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
To set up your environment to develop this page, run `bundle install`.

To test site, run `bundle exec jekyll serve` and open your browser at http://localhost:4000. This starts a Jekyll server using your config and the contents. As you make modifications, your site will regenerate and you should see the changes in the browser after a refresh.

# Pull Requests
When submitting a pull request:

- Clone the repo.
- Create a branch off of master and give it a meaningful name (e.g. my-awesome-new-feature).
- Open a [pull request](https://github.com/igorkowalczyk/countdown.js/pulls) on [GitHub](https://github.com) and describe the feature or fix.

# License
This project is licensed under the MIT. See the [LICENSE](https://github.com/igorkowalczyk/countdown.js/blob/master/license.md) file for details
