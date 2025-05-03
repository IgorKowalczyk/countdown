import { describe, test, expect, beforeEach, vi } from "vitest";
import Timer from "../src/index";

describe("Timer resume method", () => {
 beforeEach(() => {
  vi.useFakeTimers();
 });

 test("should resume the paused timer", () => {
  const timer = new Timer();
  timer.start(5000);
  timer.pause();
  timer.resume();
  expect(timer.status).toBe("running");
 });

 test("should not resume if the timer is not paused", () => {
  const timer = new Timer();
  timer.start(5000);
  timer.resume(); // Resuming without pausing should have no effect
  expect(timer.status).toBe("running");
 });
});
