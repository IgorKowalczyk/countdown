import { beforeEach, describe, expect, it, vi } from "vitest";
import Timer from "../src/index";

describe("Timer time property", () => {
 beforeEach(() => {
  vi.useFakeTimers();
 });

 it("should return the duration of the timer", () => {
  const timer = new Timer();
  timer.start(5000);
  expect(timer.duration).toBe(5000);
 });

 it("should return the remaining time when the timer is running", () => {
  const timer = new Timer();
  timer.start(5000);

  vi.advanceTimersByTime(2000);

  expect(timer.time).toBe(3000);
  timer.stop();
 });

 it("should return 0 when the timer is stopped", () => {
  const timer = new Timer();
  timer.start(5000);
  timer.stop();

  expect(timer.time).toBe(0);
 });

 it("should return the remaining time when the timer is paused", () => {
  const timer = new Timer();
  timer.start(5000);

  const remainingTime = timer.time;
  timer.pause();

  vi.advanceTimersByTime(2000);

  expect(timer.time).toBe(remainingTime);
  timer.stop();
 });
});
