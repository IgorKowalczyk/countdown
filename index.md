<main id="main-doc">
<section class="main-section">
# Countdown.js
A simple and easy-to-use countdown script
<div class="center-button">
<a href="#Getting-Started" class="button">
<svg height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"/></svg>
</a>
</div>
</section>
<section id="Getting-Started" class="main-section">
<header>
# Getting Started
Learn how to easily start using Countdown.js
</header>
<br>
## Download
Download Stable Version (`v0.0.2`) [Recomended!].
<p class="small">This version is stable, the configuration and other content will not be changed. It will always be compatible with your code.</p>
<a href="{{ site.baseurl }}/download/v0.0.2/countdown.min.js" target="_blank" class="button">Download v0.0.2</a>
<br>
Download Unstable Version
<p class="small">This version is a developer version. It may contain bugs and is constantly being improved. Using it in production is not recommended.</p>
<a href="{{ site.baseurl }}/download/countdown.min.js" target="_blank" class="button">Download Unstable v0.0.2</a>
<br>
## Include scripts
It is possible to place one of two versions in the script - minified and unminified JS files.
```html
<script type="text/javascript" src="js/countdown.min.js"></script>
```
<p>Or:</p>
```html
<script type="text/javascript" src="js/countdown.js"></script>
```
## Set end date
Choose a date that supports `JavaScript` in whatever format you like.
```javascript
var endDate ="2050/01/01";
```
</section>
<section id="Callback-parameters" class="main-section">
<header>
# Callback parameters
The callback function has two parameters.
</header>
<p class="small">The first parameter contains the following calculations related to the countdown.</p>

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

</section>
<section id="Examples" class="main-section">
<header>
# Examples

</header>
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
<br>
#### Example 2. - Static Date

```javascript
var myCountDown = new countdown("2050/01/01", function (remaining, finished) {

if (finished) {
    
    document.body.innerHTML ="Expired";

  } else {
document.body.innerHTML = remaining.hours +"h "+ remaining.minutes +"m "+ remaining.seconds +"s";

  }});
```

</section>

