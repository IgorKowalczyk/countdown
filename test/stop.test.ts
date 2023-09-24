import Timer from "../dist/cjs/index";

describe("Timer stop method", () => {
 beforeEach(() => {
  jest.useFakeTimers();
 });

 test("should stop the timer", () => {
  const timer = new Timer();
  timer.start(5000);
  timer.stop();
  expect(timer.status).toBe("stopped");
 });

 test("should reset the timer", () => {
  const timer = new Timer();
  timer.start(5000);
  timer.stop();
  expect(timer.time).toBe(0);
 });
});
