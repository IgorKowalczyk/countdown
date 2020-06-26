/*!
* Countdown.js - A simple and easy-to-use countdown.
* Author: Igor Kowalczyk
* Version: v0.0.1
* Url: https://igorkowalczyk/countdown.js
* License: MIT
*/

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], function () {
      return factory(root);
    });
  } else if (typeof exports === 'object') {
    module.exports = factory(root);
  } else {
    root.countdown = factory(root);
  }
})(typeof global !== 'undefined' ? global : typeof window !== 'undefined' ? window : this, function (window) {

  'use strict';

  var supports = function () {
    return (
      'addEventListener' in window
    );
  };

  var isDate = function (date) {
    return date instanceof Date && !isNaN(date);
  };

  var Plugin = function (fDate, cb) {

    var publicAPIs = {};
    var finalDate = null;
    var callback = null;
    var interval = null;
    var remaining = null;
    var finished = false;

    publicAPIs.init = function (fDate, cb) {

      if (!supports()) throw 'countdown.js: This browser does not support the required JavaScript methods.'

      publicAPIs.destroy();

      finalDate = (typeof fDate === 'string') ? new Date(fDate) : fDate;

      if (!isDate(finalDate)) throw new TypeError('countdown.js: Please enter a valid date.');

      if (typeof cb !== 'function') throw new TypeError('countdown.js: Please enter a callback function.');

      callback = cb;

      start();

    };
	
    publicAPIs.destroy = function () {

      finalDate = null;
      callback = null;
      stop();
      remaining = null;
      finished = false;

    };

    var calculate = function () {

      var now = new Date();

      var totalSecsLeft = Math.ceil((finalDate.getTime() - now.getTime()) / 1000);

      if (totalSecsLeft <= 0) {
        finished = true;
        stop();
      }

      remaining = {
        seconds: totalSecsLeft % 60,
        minutes: Math.floor(totalSecsLeft / 60) % 60,
        hours: Math.floor(totalSecsLeft / 60 / 60) % 24,
        days: Math.floor(totalSecsLeft / 60 / 60 / 24) % 7,
        daysToWeek: Math.floor(totalSecsLeft / 60 / 60 / 24) % 7,
        daysToMonth: Math.floor(totalSecsLeft / 60 / 60 / 24 % 30.4368),
        weeks: Math.floor(totalSecsLeft / 60 / 60 / 24 / 7),
        weeksToMonth: Math.floor(totalSecsLeft / 60 / 60 / 24 / 7) % 4,
        months: Math.floor(totalSecsLeft / 60 / 60 / 24 / 30.4368),
        monthsToYear: Math.floor(totalSecsLeft / 60 / 60 / 24 / 30.4368) % 12,
        years: Math.abs(finalDate.getFullYear() - now.getFullYear()),
        totalDays: Math.floor(totalSecsLeft / 60 / 60 / 24),
        totalHours: Math.floor(totalSecsLeft / 60 / 60),
        totalMinutes: Math.floor(totalSecsLeft / 60),
        totalSeconds: totalSecsLeft
      }

      callback(remaining, finished);

    };
    var start = function () {

      if (interval) return;

      interval = setInterval(function () {
        calculate();
      }, 100);

    };

    var stop = function () {

      if (!interval) return;

      clearInterval(interval);
      interval = null;

    };

    publicAPIs.init(fDate, cb);


    return publicAPIs;

  };


  return Plugin;

});
