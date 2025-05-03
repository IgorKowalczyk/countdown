import { describe, test, expect, beforeEach, vi } from "vitest";
import Timer from "../src/index";

describe("Timer tick method", () => {
 beforeEach(() => {
  vi.useFakeTimers();
 });

 test("should emit 'tick' event with the correct time", () => {
  const timer = new Timer();
  timer.start(5000);

  const mockTickHandler = vi.fn();
  timer.on("tick", mockTickHandler);

  vi.advanceTimersByTime(1000);
  expect(mockTickHandler).toHaveBeenCalledTimes(1);
  expect(mockTickHandler).toHaveBeenCalledWith(timer.time);
 });

 test("should emit 'done' event when the timer is finished", () => {
  const timer = new Timer();
  timer.start(1000);

  const mockDoneHandler = vi.fn();
  timer.on("done", mockDoneHandler);

  vi.advanceTimersByTime(1000);
  expect(mockDoneHandler).toHaveBeenCalledTimes(1);
 });

 test("should emit tick event while timer is running", () => {
  const timer = new Timer();
  timer.start(5000);

  const mockTickHandler = vi.fn();
  timer.on("tick", mockTickHandler);

  vi.advanceTimersByTime(1000);
  expect(mockTickHandler).toHaveBeenCalledTimes(1);

  timer.pause();

  vi.advanceTimersByTime(2000);

  expect(mockTickHandler).toHaveBeenCalledTimes(1);

  timer.stop();
 });
});
