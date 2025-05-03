import { beforeEach, it, describe, expect, vi } from "vitest";
import Timer from "../src/index";

describe("Timer start method", () => {
 beforeEach(() => {
  vi.useFakeTimers();
 });

 it("should start the timer", () => {
  const timer = new Timer();
  timer.start(5000);
  expect(timer.status).toBe("running");

  vi.advanceTimersByTime(1000);
  expect(timer.time).toBe(4000);

  timer.stop();
 });

 it("should throw TypeError when duration is not provided", () => {
  const timer = new Timer();

  /* @ts-expect-error We are testing the error handling */
  expect(() => timer.start(undefined)).toThrow(TypeError);
 });

 it("should not start the timer if it is already running", () => {
  const timer = new Timer();
  timer.start(5000);

  const initialStatus = timer.status;
  timer.start(3000);

  expect(timer.status).toBe(initialStatus);

  timer.stop();
 });

 it("should start the stopwatch with 0 time", () => {
  const timer = new Timer({ interval: 1000, stopwatch: true });

  const mockTickHandler = vi.fn();
  timer.on("tick", mockTickHandler);

  timer.start(5000);
  expect(timer.status).toBe("running");

  vi.advanceTimersByTime(1000);

  setImmediate(() => {
   expect(mockTickHandler).toHaveBeenCalledTimes(1);
   expect(mockTickHandler).toHaveBeenCalledWith(0);

   timer.stop();
   timer.off("tick", mockTickHandler);
  });
 });
});
