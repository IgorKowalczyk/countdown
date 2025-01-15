import Timer from "@/src/index";

describe("Timer tick method", () => {
 beforeEach(() => {
  jest.useFakeTimers();
 });

 test("should emit 'tick' event with the correct time", () => {
  const timer = new Timer();
  timer.start(5000);

  const mockTickHandler = jest.fn();
  timer.on("tick", mockTickHandler);

  // Advance the timer manually to check the tick event
  jest.advanceTimersByTime(1000);
  expect(mockTickHandler).toHaveBeenCalledTimes(1);
  expect(mockTickHandler).toHaveBeenCalledWith(timer.time);
 });

 test("should emit 'done'\"' event when the timer is finished", () => {
  const timer = new Timer();
  timer.start(1000);

  const mockDoneHandler = jest.fn();
  timer.on("done", mockDoneHandler);

  // Advance the timer manually to trigger the done event
  jest.advanceTimersByTime(1000);
  expect(mockDoneHandler).toHaveBeenCalledTimes(1);
 });

 test("should emit tick event while timer is running", () => {
  const timer = new Timer();
  timer.start(5000); // Start the timer for 5 seconds

  // Create a mock event handler for the "tick" event
  const mockTickHandler = jest.fn();
  timer.on("tick", mockTickHandler);

  // Advance the timer manually to trigger the tick event
  jest.advanceTimersByTime(1000);
  expect(mockTickHandler).toHaveBeenCalledTimes(1);

  // Pause the timer
  timer.pause();

  // Advance the timer manually again
  jest.advanceTimersByTime(2000);

  // Verify that the tick event handler was not called again while paused
  expect(mockTickHandler).toHaveBeenCalledTimes(1);

  // Stop the timer to prepare for the next test
  timer.stop();
 });
});
