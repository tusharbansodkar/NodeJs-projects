const fs = require("node:fs/promises");
const path = require("node:path");
const parser = require("./parser.js");
const analyzer = require("./analyzer.js");
const formatter = require("./formatter.js");

async function logAnalyzer() {
  try {
    const args = process.argv.slice(2);
    const inputPath = args[0];

    if (!inputPath) {
      throw new Error("A log file path is required.");
    }

    let severity = null;

    // Parse optional CLI arguments
    if (args.length > 1) {
      if (args[1] !== "--level") {
        throw new Error("Invalid option. Use --level INFO, WARN, or ERROR.");
      }

      if (!args[2]) {
        throw new Error("Missing severity level. Use INFO, WARN, or ERROR.");
      }

      severity = args[2].toUpperCase();

      if (!["INFO", "WARN", "ERROR"].includes(severity)) {
        throw new Error("Invalid severity level. Use INFO, WARN, or ERROR.");
      }

      if (args.length > 3) {
        throw new Error("Too many arguments provided.");
      }
    }

    // Validate the file path
    const absolutePath = path.resolve(inputPath);
    const stats = await fs.stat(absolutePath);

    if (!stats.isFile()) {
      throw new Error("The provided path is not a file.");
    }

    // Read and parse logs
    const fileContent = await fs.readFile(absolutePath, "utf8");
    let parsed = parser(fileContent);

    // Apply optional severity filter
    if (severity) {
      parsed = parsed.filter((entry) => entry.level === severity);
    }

    // Analyze and display results
    const analyzed = analyzer(parsed);
    const formattedOutput = formatter(analyzed);

    console.log(formattedOutput);
  } catch (error) {
    if (error.code === "ENOENT") {
      console.error("The provided file or path does not exist.");
    } else if (error.code === "EACCES") {
      console.error("Permission denied: unable to access the file.");
    } else {
      console.error(error.message);
    }

    process.exitCode = 1;
  }
}

logAnalyzer();
