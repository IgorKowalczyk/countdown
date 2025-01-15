/* eslint-disable node/no-missing-require */
const Timer = require("@igorkowalczyk/countdown");
const timer = new Timer();

timer.on("tick", (ms) => console.log("tick", ms));
timer.on("done", () => console.log("done!"));
timer.on("statusChanged", (status) => console.log("Status: ", status));

timer.start(20000); // Timer for 20s
