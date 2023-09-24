import Timer from "../src/index";

describe("Timer start method", () => {
 beforeEach(() => {
  jest.useFakeTimers();
 });

 test("should start the timer", () => {
  const timer = new Timer();
  timer.start(5000); // Start the timer for 5 seconds
  expect(timer.status).toBe("running");

  // Advance the timer manually to check the tick event
  jest.advanceTimersByTime(1000);
  expect(timer.time).toBe(4000);

  // Stop the timer to prepare for the next test
  timer.stop();
 });

 test("should throw TypeError when duration is not provided", () => {
  const timer = new Timer();
  /* @ts-ignore */
  expect(() => timer.start(undefined)).toThrow(TypeError);
  /* @ts-ignore */
 });

 test("should not start the timer if it is already running", () => {
  const timer = new Timer();
  timer.start(5000); // Start the timer for 5 seconds

  // Save the current timer status
  const initialStatus = timer.status;

  // Attempt to start the timer again
  timer.start(3000);

  // Verify that the timer status remains unchanged
  expect(timer.status).toBe(initialStatus);

  // Stop the timer to prepare for the next test
  timer.stop();
 });

 test("should start the stopwatch with 0 time", () => {
  const timer = new Timer({ interval: 1000, stopwatch: true });

  // Register an event handler for the "tick" event
  const mockTickHandler = jest.fn();
  timer.on("tick", mockTickHandler);

  timer.start(5000);
  expect(timer.status).toBe("running");

  // Advance the timer manually to check the tick event
  jest.advanceTimersByTime(1000);

  // Use setImmediate to execute the assertion after the event loop is clear
  setImmediate(() => {
   // Verify that the "tick" event handler was called with the correct time (0)
   expect(mockTickHandler).toHaveBeenCalledTimes(1);
   expect(mockTickHandler).toHaveBeenCalledWith(0);

   // Stop the timer and remove the event handler to prepare for the next test
   timer.stop();
   timer.off("tick", mockTickHandler);
  });
 });
});
