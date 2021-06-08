import { EventType, Handler } from "mitt";
declare type status = "running" | "paused" | "stopped";
/**
 * Creates a new Timer
 * @class Timer
 */
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
     * @param {number} time
     * @param {stopwatch} boolean
     * @return {Timer}
     */
    constructor({ interval, stopwatch }?: {
        interval?: number | undefined;
        stopwatch?: boolean | undefined;
    });
    /**
     * @function start
     * @returns {object}
     */
    start(duration: number, interval?: number): void;
    /**
     * @function stop
     * @returns {object}
     */
    stop(): void;
    /**
     * @function pause
     * @returns {object}
     */
    pause(): void;
    /**
     * @function resume
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
     * @returns {string}
     */
    get time(): number;
    /**
     * @function duration
     * @returns {string}
     */
    get duration(): number;
    /**
     * @function status
     * @returns {string}
     */
    get status(): status;
    on(eventName: EventType, handler: Handler<any>): void;
    off(eventName: EventType, handler: Handler<any>): void;
}
/**
 @module Timer
*/
export default Timer;
