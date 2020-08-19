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
or include unminified version:
```html
<script src="path/to/countdown.js"></script>
```

### 2. Set end date
Choose a date that supports `JavaScript` in whatever format you like.

```javascript
var endDate = "2050/01/01";
```

### 3. Initialize countdown.js
In the end of your page, after the content, initialize countdown.js. And that's it, you're done. Nice work!

```javascript
var countdownExample = new countdown(endDate, function (remaining, finished) {

  if (finished) {
    // countdown finished
  } else {
    // do something
  }

});
```
> (Do not forget to set end date (In example - `endDate`)

**Example 1**

```javascript
var countdownExample = new countdown("2050/01/01", function (remaining, finished) {

  if (finished) {
    document.body.innerHTML = "Expired";
  } else {
    document.body.innerHTML = remaining.hours + "h " + remaining.minutes + "m " + remaining.seconds + "s";
  }

});
```

**Example 2**

```javascript
var countdownExample = new countdown(new Date("2050-01-01T12:05:55Z"), function (remaining, finished) {

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
var countdownExample = new countdown(endDate, myCallback);

countdownExample.init(myDate, myFunction);
```

#### destroy()
Destroy the current `countdown.init()`. This is called automatically during the `init` function to remove any existing initializations.

```javascript
var countdownExample = new countdown(endDate, function (remaining, finished) { });

countdownExample.destroy();
```

### Callback parameters
The callback function has two parameters.

The first parameter contains the following calculations related to the countdown.

| **Parametrs** | **Description** |
|---------------|-----------------|
| `seconds` | Seconds to end date. |
| `minutes` | Minutes to end date. |
| `hours` | Hours to end date. |
| `days` | Days to end date. |
| `daysToWeek` | Days to selected week. |
| `daysToMonth` | Days to selected month. |
| `weeks` | Weeks to end date. |
| `weeksToMonth` | Weeks to selected month. |
| `months` | Months to selected date. |
| `monthsToYear` | Months to selected year. |
| `months` | Months to selected date. |
| `years` | Years to selected date.  |
| `totalDays` | Total days to end date. |
| `totalHours` | Total hours to end date. |
| `totalMinutes` | Total minutes to end date. |
| `totalSeconds` | Total seconds to end date. |

> The second parameter indicates whether the countdown is over.

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
