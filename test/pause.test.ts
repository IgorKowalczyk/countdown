import { describe, test, expect, beforeEach, vi } from "vitest";
import Timer from "../src/index";

describe("Timer pause method", () => {
 beforeEach(() => {
  vi.useFakeTimers();
 });

 test("should pause the timer", () => {
  const timer = new Timer();
  timer.start(5000); // Start the timer for 5 seconds
  timer.pause();
  expect(timer.status).toBe("paused");
  timer.stop();
 });

 test("should not pause the timer if it is not running", () => {
  const timer = new Timer();

  // Save the current timer status
  const initialStatus = timer.status;

  timer.pause();

  expect(timer.status).toBe(initialStatus);
  timer.stop();
 });
});
