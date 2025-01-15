import Timer from "@/src/index";

describe("Timer off method", () => {
 beforeEach(() => {
  jest.useFakeTimers();
 });

 test("should remove the event handler", () => {
  const timer = new Timer();
  timer.start(5000);

  // Mock event handler
  const mockTickHandler = jest.fn();
  const mockDoneHandler = jest.fn();

  // Register event handlers
  timer.on("tick", mockTickHandler);
  timer.on("done", mockDoneHandler);

  // Advance the timer manually to trigger events
  jest.advanceTimersByTime(1000);
  jest.advanceTimersByTime(5000);

  // Verify that both event handlers were called
  expect(mockTickHandler).toHaveBeenCalledTimes(5);
  expect(mockDoneHandler).toHaveBeenCalledTimes(1);

  // Remove the tick event handler
  timer.off("tick", mockTickHandler);

  // Remove the done event handler
  timer.off("done", mockDoneHandler);

  // Advance the timer again to trigger events
  jest.advanceTimersByTime(5000);

  // Verify that none of the event handlers are called anymore
  expect(mockTickHandler).toHaveBeenCalledTimes(5);
  expect(mockDoneHandler).toHaveBeenCalledTimes(1);

  // Clean up the timer
  timer.stop();
 });
});
