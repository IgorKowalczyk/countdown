import { EventEmitter } from "node:events";

/* Status type */
type Status = "running" | "paused" | "stopped";

interface TimerOptions {
 interval?: number;
 stopwatch?: boolean;
}

class Timer {
 private _interval: number;
 private _stopwatch: boolean;
 private _duration: number = 0;
 private _endTime: number = 0;
 private _pauseTime: number = 0;
 private _status: Status = "stopped";
 private _eventEmitter: EventEmitter;
 private _timeoutID: NodeJS.Timeout | null = null;

 /**
  * Creates a Timer instance.
  * @param {TimerOptions} options - Optional configuration options for the timer.
  */
 constructor({ interval = 1000, stopwatch = false }: TimerOptions = {}) {
  this._interval = interval;
  this._stopwatch = stopwatch;
  this._eventEmitter = new EventEmitter();
 }

 /**
  * Starts the timer.
  * @param {number} duration - The duration (in milliseconds) for the timer to run.
  */
 public start(duration: number): void {
  if (this._status !== "stopped") return;
  if (typeof duration !== "number" || duration <= 0) {
   throw new TypeError("You need to enter a valid duration");
  }

  this._duration = duration;
  this._endTime = Date.now() + duration;
  this._changeStatus("running");
  this._emitTick(this._stopwatch ? 0 : this._duration);
  this.tick(); // Start the first tick immediately
 }

 /**
  * Stops the timer.
  */
 public stop(): void {
  this._changeStatus("stopped");
  if (this._timeoutID) clearTimeout(this._timeoutID);
 }

 /**
  * Pauses the timer.
  */
 public pause(): void {
  if (this._status !== "running") return;
  this._pauseTime = Date.now();
  this._changeStatus("paused");
 }

 /**
  * Resumes the timer after pausing.
  */
 public resume(): void {
  if (this._status !== "paused") return;
  this._endTime += Date.now() - this._pauseTime;
  this._pauseTime = 0;
  this._changeStatus("running");
  this.tick(); // Start ticking again after resuming
 }

 /**
  * Adds a listener for a specific event.
  * @param {string} eventName - The name of the event to listen for.
  * @param {(...args: unknown[]) => void} handler - The function to be called when the event is emitted.
  */
 public on(eventName: string, handler: (...args: unknown[]) => void): void {
  this._eventEmitter.on(eventName, handler);
 }

 /**
  * Removes a listener for a specific event.
  * @param {string} eventName - The name of the event to stop listening for.
  * @param {(...args: unknown[]) => void} handler - The function to be removed from the listeners of the event.
  */
 public off(eventName: string, handler: (...args: unknown[]) => void): void {
  this._eventEmitter.removeListener(eventName, handler);
 }

 /**
  * Changes the status of the timer and emits the "statusChanged" event.
  * @param {Status} status - The new status for the timer.
  * @private
  */
 private _changeStatus(status: Status): void {
  this._status = status;
  this._emit("statusChanged", this.status);
 }

 /**
  * Emits the "tick" event with the specified time value.
  * @param {number} time - The time value to be sent with the "tick" event.
  * @private
  */
 private _emitTick(time: number): void {
  this._emit("tick", time);
 }

 /**
  * Emits a specified event with the provided data.
  * @param {string} event - The name of the event to be emitted.
  * @param {unknown} data - The data to be sent with the event.
  * @private
  */
 private _emit(event: string, data: unknown): void {
  this._eventEmitter.emit(event, data);
 }

 /**
  * The main ticking function of the timer. It calculates the time left, emits the "tick" event, and schedules the next tick.
  * @private
  */
 private tick = (): void => {
  if (this._status === "paused") return;

  const currentTime = Date.now();
  const timeLeft = this._endTime - currentTime;

  if (timeLeft <= 0) {
   this.stop();
   this._emitTick(this._stopwatch ? this._duration : 0);
   this._emit("done", null);
  } else {
   this._emitTick(this.time);
   const nextTickDelay = Math.min(this._interval, timeLeft);
   this._timeoutID = setTimeout(this.tick, nextTickDelay);
  }
 };

 /**
  * Gets the current time left in the timer.
  * @returns {number} The time left (in milliseconds) in the timer. Returns 0 if the timer is stopped.
  */
 get time(): number {
  if (this._status === "stopped") return 0;
  const time = this._status === "paused" ? this._pauseTime : Date.now();
  const left = this._endTime - time;
  return this._stopwatch ? this._duration - left : left;
 }

 /**
  * Gets the initial duration (in milliseconds) set for the timer.
  * @returns {number} The initial duration of the timer.
  */
 get duration(): number {
  return this._duration;
 }

 /**
  * Gets the current status of the timer.
  * @returns {Status} The current status of the timer ("running", "paused", or "stopped").
  */
 get status(): Status {
  return this._status;
 }
}

export default Timer;
