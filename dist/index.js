module.exports =
/******/ (function(modules, runtime) { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	__webpack_require__.ab = __dirname + "/";
/******/
/******/ 	// the startup function
/******/ 	function startup() {
/******/ 		// Load entry module and return exports
/******/ 		return __webpack_require__(325);
/******/ 	};
/******/ 	// initialize runtime
/******/ 	runtime(__webpack_require__);
/******/
/******/ 	// run startup
/******/ 	return startup();
/******/ })
/************************************************************************/
/******/ ({

/***/ 325:
/***/ (function(__unusedmodule, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mitt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(858);
/* harmony import */ var mitt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mitt__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Creates a new Timer
 * @class Timer
 */
class Timer {
    /**
     * Creates a new timer
     * @param {number} time
     * @param {stopwatch} boolean
     * @return {Timer}
     */
    constructor({ interval = 1000, stopwatch = false } = {}) {
        this._duration = 0;
        this._endTime = 0;
        this._pauseTime = 0;
        this._status = "stopped";
        this._emitter = mitt__WEBPACK_IMPORTED_MODULE_0___default()();
        /**
         * @private
         * @returns {object}
         */
        this.tick = () => {
            if (this.status === "paused")
                return;
            if (Date.now() >= this._endTime) {
                this.stop();
                this._emitter.emit("tick", this._stopwatch ? this._duration : 0);
                this._emitter.emit("done");
            }
            else {
                this._emitter.emit("tick", this.time);
            }
        };
        this._interval = interval;
        this._stopwatch = stopwatch;
    }
    /**
     * @function start
     * @returns {object}
     */
    start(duration, interval) {
        if (this.status !== "stopped")
            return;
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
     * @returns {object}
     */
    stop() {
        if (this._timeoutID)
            clearInterval(this._timeoutID);
        this._changeStatus("stopped");
    }
    /**
     * @function pause
     * @returns {object}
     */
    pause() {
        if (this.status !== "running")
            return;
        this._pauseTime = Date.now();
        this._changeStatus("paused");
    }
    /**
     * @function resume
     * @returns {object}
     */
    resume() {
        if (this.status !== "paused")
            return;
        this._endTime += Date.now() - this._pauseTime;
        this._pauseTime = 0;
        this._changeStatus("running");
    }
    /**
     * @private
     * @returns {object}
     */
    _changeStatus(status) {
        this._status = status;
        this._emitter.emit("statusChanged", this.status);
    }
    /**
     * @function time
     * @returns {string}
     */
    get time() {
        if (this.status === "stopped")
            return 0;
        const time = this.status === "paused" ? this._pauseTime : Date.now();
        const left = this._endTime - time;
        return this._stopwatch ? this._duration - left : left;
    }
    /**
     * @function duration
     * @returns {string}
     */
    get duration() {
        return this._duration;
    }
    /**
     * @function status
     * @returns {string}
     */
    get status() {
        return this._status;
    }
    on(eventName, handler) {
        this._emitter.on(eventName, handler);
    }
    off(eventName, handler) {
        this._emitter.off(eventName, handler);
    }
}
/**
 @module Timer
*/
/* harmony default export */ __webpack_exports__["default"] = (Timer);


/***/ }),

/***/ 858:
/***/ (function(module) {

module.exports=function(n){return{all:n=n||new Map,on:function(e,t){var i=n.get(e);i&&i.push(t)||n.set(e,[t])},off:function(e,t){var i=n.get(e);i&&i.splice(i.indexOf(t)>>>0,1)},emit:function(e,t){(n.get(e)||[]).slice().map(function(n){n(t)}),(n.get("*")||[]).slice().map(function(n){n(e,t)})}}};
//# sourceMappingURL=mitt.js.map


/***/ })

/******/ },
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function getDefault() { return module['default']; } :
/******/ 				function getModuleExports() { return module; };
/******/ 			__webpack_require__.d(getter, 'a', getter);
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getter */
/******/ 	!function() {
/******/ 		// define getter function for harmony exports
/******/ 		var hasOwnProperty = Object.prototype.hasOwnProperty;
/******/ 		__webpack_require__.d = function(exports, name, getter) {
/******/ 			if(!hasOwnProperty.call(exports, name)) {
/******/ 				Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ }
);