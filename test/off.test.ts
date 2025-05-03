import { describe, it, expect, vi } from "vitest";
import Timer from "../src/index";

describe("Timer off method", () => {
 it("should remove the event handler", () => {
  vi.useFakeTimers();
  const timer = new Timer();
  timer.start(5000);

  const mockTickHandler = vi.fn();
  const mockDoneHandler = vi.fn();

  timer.on("tick", mockTickHandler);
  timer.on("done", mockDoneHandler);

  vi.advanceTimersByTime(1000);
  vi.advanceTimersByTime(5000);

  expect(mockTickHandler).toHaveBeenCalledTimes(5);
  expect(mockDoneHandler).toHaveBeenCalledTimes(1);

  timer.off("tick", mockTickHandler);
  timer.off("done", mockDoneHandler);

  vi.advanceTimersByTime(5000);

  expect(mockTickHandler).toHaveBeenCalledTimes(5);
  expect(mockDoneHandler).toHaveBeenCalledTimes(1);

  timer.stop();
 });
});
