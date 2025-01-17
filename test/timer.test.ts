import Timer from "../src/index";

describe("Timer time property", () => {
 beforeEach(() => {
  jest.useFakeTimers();
 });

 test("should return the duration of the timer", () => {
  const timer = new Timer();
  timer.start(5000);
  expect(timer.duration).toBe(5000);
 });

 test("should return the remaining time when the timer is running", () => {
  const timer = new Timer();
  timer.start(5000);

  // Advance the timer manually to reduce the remaining time
  jest.advanceTimersByTime(2000);

  // Verify that the remaining time is correct
  expect(timer.time).toBe(3000);

  // Stop the timer to prepare for the next test
  timer.stop();
 });

 test("should return 0 when the timer is stopped", () => {
  const timer = new Timer();
  timer.start(5000);
  timer.stop();

  // Verify that the remaining time is 0 when the timer is stopped
  expect(timer.time).toBe(0);
 });

 test("should return the remaining time when the timer is paused", () => {
  const timer = new Timer();
  timer.start(5000);

  // Pause the timer and save the remaining time
  const remainingTime = timer.time;

  // Pause the timer
  timer.pause();

  // Advance the timer manually to trigger the tick event (should not change the remaining time)
  jest.advanceTimersByTime(2000);

  // Verify that the remaining time remains the same after pausing the timer
  expect(timer.time).toBe(remainingTime);

  // Stop the timer to prepare for the next test
  timer.stop();
 });
});
