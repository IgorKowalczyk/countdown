import { describe, test, expect, beforeEach, vi } from "vitest";
import Timer from "../src/index";

describe("Timer on method", () => {
 beforeEach(() => {
  vi.useFakeTimers();
 });

 test("should register the event handler", () => {
  const timer = new Timer();
  timer.start(5000);

  const mockTickHandler = vi.fn();

  timer.on("tick", mockTickHandler);

  vi.advanceTimersByTime(1000);
  vi.advanceTimersByTime(5000);

  expect(mockTickHandler).toHaveBeenCalledTimes(5);

  const mockDoneHandler = vi.fn();
  timer.on("done", mockDoneHandler);
  vi.advanceTimersByTime(5000); // Advance to the end of the timer
  expect(mockDoneHandler).toHaveBeenCalledTimes(0);
 });
});
