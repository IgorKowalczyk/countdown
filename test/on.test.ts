import Timer from "@/src/index";

describe("Timer on method", () => {
 beforeEach(() => {
  jest.useFakeTimers();
 });

 test("should register the event handler", () => {
  const timer = new Timer();
  timer.start(5000);

  // Mock event handler
  const mockTickHandler = jest.fn();

  // Register the event handler
  timer.on("tick", mockTickHandler);

  // Advance the timer manually to trigger events
  jest.advanceTimersByTime(1000);
  jest.advanceTimersByTime(5000);

  // Verify that the tick event handler was called multiple times (every second)
  expect(mockTickHandler).toHaveBeenCalledTimes(5);

  // The done event should not be emitted since we only registered the tick event
  const mockDoneHandler = jest.fn();
  timer.on("done", mockDoneHandler);
  jest.advanceTimersByTime(5000); // Advance to the end of the timer
  expect(mockDoneHandler).toHaveBeenCalledTimes(0);
 });
});
