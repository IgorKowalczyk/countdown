import Timer from "../src/index";

describe("Timer pause method", () => {
 test("should pause the timer", () => {
  const timer = new Timer();
  timer.start(5000); // Start the timer for 5 seconds
  timer.pause();
  expect(timer.status).toBe("paused");
 });

 test("should not pause the timer if it is not running", () => {
  const timer = new Timer();

  // Save the current timer status
  const initialStatus = timer.status;

  // Attempt to pause the timer
  timer.pause();

  // Verify that the timer status remains unchanged
  expect(timer.status).toBe(initialStatus);
 });
});
