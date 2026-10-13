const parser = (content) => {
  const lines = content.split(/\r?\n/);

  const parsedLines = lines
    .filter((line) => line.trim() !== "")
    .map((line, index) => {
      const trimmedLine = line.trim();
      const lineParts = trimmedLine.split(/\s+/);

      if (lineParts.length < 4) {
        throw new Error(`Invalid log entry at line ${index + 1}: ${line}`);
      }

      const timestamp = `${lineParts[0]} ${lineParts[1]}`;
      const level = lineParts[2];
      const message = lineParts.slice(3).join(" ");

      if (!["INFO", "WARN", "ERROR"].includes(level)) {
        throw new Error(`Invalid log level at line ${index + 1}: ${level}`);
      }

      return { timestamp, level, message };
    });

  return parsedLines;
};

module.exports = parser;
