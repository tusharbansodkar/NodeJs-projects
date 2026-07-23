const countdownTimer = require("./timer");

const input = process.argv[2];

if (!input) {
  console.log("Please provide a time.");
  process.exit(1);
}

const unit = input[input.length - 1];
let time;

switch (unit) {
  case "s":
    time = Number(input.slice(0, -1));
    break;

  case "m":
    time = Number(input.slice(0, -1) * 60);
    break;

  case "h":
    time = Number(input.slice(0, -1) * 3600);
    break;

  default:
    time = Number(input);
}

if (!Number.isInteger(time) || time <= 0) {
  console.log("Please provide a valid positive time (e.g. 30, 30s, 5m, 2h).");
  process.exit(1);
}

countdownTimer(time);
