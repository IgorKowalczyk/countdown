---
layout: "default"
---
{:.center}
# Countdown.js

{:.center}
A simple and easy-to-use countdown script
<div class="center-button">
<a href="#Getting-Started" class="button">
<svg height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"/></svg>
</a>
</div>

# Getting Started
Learn how to easily start using Countdown.js

## Download
Download Stable Version (`{{ site.version }}`) [Recomended!].
This version is stable, the configuration and other content will not be changed. It will always be compatible with your code.

<a href="{{ site.baseurl }}/download/{{ site.version }}/countdown.min.js" target="_blank" class="button">Download {{ site.version }}</a>

Download Unstable Version
This version is a developer version. It may contain bugs and is constantly being improved. Using it in production is not recommended.

<a href="{{ site.baseurl }}/download/countdown.min.js" target="_blank" class="button">Download Unstable {{ site.version }}</a>

## Include scripts
It is possible to place one of two versions in the script - minified and unminified JS files.
```html
<script type="text/javascript" src="js/countdown.min.js"></script>
```
Or:
```html
<script type="text/javascript" src="js/countdown.js"></script>
```
## Set end date
Choose a date that supports `JavaScript` in whatever format you like.
```javascript
var endDate ="2050/01/01";
```

# Callback parameters
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

# Examples

#### Example 1. - Simple

```javascript
var counterElement = document.querySelector("#counter"); // Select "p" with "counter" ID
var endDate = (new Date().getFullYear() +1) +"/01/01"; // Select date (Default javascript date format)
var myCountDown = new countdown(endDate, function(remaining, finished) { // Setup countdown

var message =""; // Default message

  if (finished) {
    message ="Expired"; // Show text when expire

  }  else  {
    message = remaining.totalDays +" d "; // Else
    message += remaining.minutes +" m "; // Else
    message += remaining.seconds +" s "; // Else
  }

  counterElement.textContent = message; // Render message
});
```

<a href="{{ site.baseurl }}/examples/simple" target="_blank" class="button">See Example</a>
#### Example 2. - Static Date

```javascript
var myCountDown = new countdown("2050/01/01", function (remaining, finished) {

if (finished) {
    
    document.body.innerHTML ="Expired";

  } else {
document.body.innerHTML = remaining.hours +"h "+ remaining.minutes +"m "+ remaining.seconds +"s";

  }});
```