import mitt, { EventType, Handler } from "mitt";

/* Status type */
type status = "running" | "paused" | "stopped";
class Timer {
 private _interval: number;
 private _stopwatch: boolean;
 private _duration: number = 0;
 private _endTime: number = 0;
 private _pauseTime: number = 0;
 private _status: status = "stopped";
 private _timeoutID?: NodeJS.Timeout;
 private _emitter = mitt();
 /**
  * Creates a new timer
  * @constructor
  * @param {number} [time=1000] Set the tics for the timer
  * @param {boolean} [stopwatch=false] Set the stopwatch module
  * @example
  * const Timer = require('@igorkowalczyk/countdown')
  * const timer = new Timer()
  * @return {Timer}
  */
 constructor({ interval = 1000, stopwatch = false } = {}) {
  this._interval = interval;
  this._stopwatch = stopwatch;
 }
 /**
  * @function start
  * @example
  * const Timer = require('@igorkowalczyk/countdown')
  * const timer = new Timer()
  * timer.start(duration [, interval])
  * @returns {object}
  */
 public start(duration: number, interval?: number) {
  if (this.status !== "stopped") return;
  if (!duration) {
   throw new TypeError("You need to enter duration");
  }
  this._duration = duration;
  this._endTime = Date.now() + duration;
  this._changeStatus("running");
  this._emitter.emit("tick", this._stopwatch ? 0 : this._duration);
  this._timeoutID = setInterval(this.tick, interval || this._interval);
 }

 /**
  * @function stop
  * @example
  * const Timer = require('@igorkowalczyk/countdown')
  * const timer = new Timer()
  * timer.stop()
  * @returns {object}
  */
 public stop() {
  if (this._timeoutID) clearInterval(this._timeoutID);
  this._changeStatus("stopped");
 }

 /**
  * @function pause
  * @example
  * const Timer = require('@igorkowalczyk/countdown')
  * const timer = new Timer()
  * timer.pause()
  * @returns {object}
  */
 public pause() {
  if (this.status !== "running") return;
  this._pauseTime = Date.now();
  this._changeStatus("paused");
 }

 /**
  * @function resume
  * @example
  * const Timer = require('@igorkowalczyk/countdown')
  * const timer = new Timer()
  * timer.resume()
  * @returns {object}
  */
 public resume() {
  if (this.status !== "paused") return;
  this._endTime += Date.now() - this._pauseTime;
  this._pauseTime = 0;
  this._changeStatus("running");
 }

 /**
  * @private
  * @returns {object}
  */
 private _changeStatus(status: status) {
  this._status = status;
  this._emitter.emit("statusChanged", this.status);
 }

 /**
  * @private
  * @returns {object}
  */
 private tick = () => {
  if (this.status === "paused") return;
  if (Date.now() >= this._endTime) {
   this.stop();
   this._emitter.emit("tick", this._stopwatch ? this._duration : 0);
   this._emitter.emit("done");
  } else {
   this._emitter.emit("tick", this.time);
  }
 };

 /**
  * @function time
  * @example
  * const Timer = require('@igorkowalczyk/countdown')
  * const timer = new Timer()
  * timer.time() // Returns current time in ms
  * @returns {string}
  */
 get time() {
  if (this.status === "stopped") return 0;
  const time = this.status === "paused" ? this._pauseTime : Date.now();
  const left = this._endTime - time;
  return this._stopwatch ? this._duration - left : left;
 }

 /**
  * @function duration
  * @example
  * const Timer = require('@igorkowalczyk/countdown')
  * const timer = new Timer()
  * timer.duration() // Return the total duration of the timer in ms
  * @returns {string}
  */
 get duration() {
  return this._duration;
 }

 /**
  * @function status
  * @example
  * const Timer = require('@igorkowalczyk/countdown')
  * const timer = new Timer()
  * timer.status() // return running, paused or stopped
  * @returns {string}
  */
 get status() {
  return this._status;
 }

 public on(eventName: EventType, handler: Handler<any>) {
  this._emitter.on(eventName, handler);
 }

 public off(eventName: EventType, handler: Handler<any>) {
  this._emitter.off(eventName, handler);
 }
}

export default Timer;
