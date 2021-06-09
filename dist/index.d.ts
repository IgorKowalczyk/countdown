import { EventType, Handler } from "mitt";
declare type status = "running" | "paused" | "stopped";
declare class Timer {
    private _interval;
    private _stopwatch;
    private _duration;
    private _endTime;
    private _pauseTime;
    private _status;
    private _timeoutID?;
    private _emitter;
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
    constructor({ interval, stopwatch }?: {
        interval?: number | undefined;
        stopwatch?: boolean | undefined;
    });
    /**
     * @function start
     * @example
     * const Timer = require('@igorkowalczyk/countdown')
     * const timer = new Timer()
     * timer.start(duration [, interval])
     * @returns {object}
     */
    start(duration: number, interval?: number): void;
    /**
     * @function stop
     * @example
     * const Timer = require('@igorkowalczyk/countdown')
     * const timer = new Timer()
     * timer.stop()
     * @returns {object}
     */
    stop(): void;
    /**
     * @function pause
     * @example
     * const Timer = require('@igorkowalczyk/countdown')
     * const timer = new Timer()
     * timer.pause()
     * @returns {object}
     */
    pause(): void;
    /**
     * @function resume
     * @example
     * const Timer = require('@igorkowalczyk/countdown')
     * const timer = new Timer()
     * timer.resume()
     * @returns {object}
     */
    resume(): void;
    /**
     * @private
     * @returns {object}
     */
    private _changeStatus;
    /**
     * @private
     * @returns {object}
     */
    private tick;
    /**
     * @function time
     * @example
     * const Timer = require('@igorkowalczyk/countdown')
     * const timer = new Timer()
     * timer.time() // Returns current time in ms
     * @returns {string}
     */
    get time(): number;
    /**
     * @function duration
     * @example
     * const Timer = require('@igorkowalczyk/countdown')
     * const timer = new Timer()
     * timer.duration() // Return the total duration of the timer in ms
     * @returns {string}
     */
    get duration(): number;
    /**
     * @function status
     * @example
     * const Timer = require('@igorkowalczyk/countdown')
     * const timer = new Timer()
     * timer.status() // return running, paused or stopped
     * @returns {string}
     */
    get status(): status;
    on(eventName: EventType, handler: Handler<any>): void;
    off(eventName: EventType, handler: Handler<any>): void;
}
export default Timer;
