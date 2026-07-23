function countdownTimer(time) {
  const TOTAL_TIME = time;
  const BAR_LENGTH = 20;

  const intervalID = setInterval(() => {
    if (time === 0) {
      clearInterval(intervalID);

      process.stdout.clearLine(0);
      process.stdout.cursorTo(0);
      process.stdout.write(
        `\r${"█".repeat(BAR_LENGTH)} 100% | 00:00 remaining\n Time's up!\n`,
      );
    } else {
      const progress = (TOTAL_TIME - time) / TOTAL_TIME;
      const filledBlocks = Math.floor(progress * BAR_LENGTH);
      const emptyBlocks = BAR_LENGTH - filledBlocks;

      const minutes = Math.floor(time / 60);
      const seconds = time % 60;

      const bar = "█".repeat(filledBlocks) + "▒".repeat(emptyBlocks);
      process.stdout.write(
        `\r${bar} ${Math.round(progress * 100)}% | ${minutes}:${seconds.toString().padStart(2, "0")} remaining`,
      );
      time--;
    }
  }, 1000);
}

module.exports = countdownTimer;
