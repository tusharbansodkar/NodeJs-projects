const fs = require("node:fs/promises");
const path = require("node:path");
const organizeFilesByExt = require("./organizer");

const inputPath = process.argv[2];

async function organizeFiles(inputPath) {
  try {
    if (!inputPath) {
      throw new Error("Please provide a path to organize.");
    }

    const absolutePath = path.resolve(inputPath);
    const stats = await fs.stat(absolutePath);

    if (!stats.isDirectory()) {
      throw new Error("The provided path is not a directory.");
    }

    const entries = await fs.readdir(absolutePath, { withFileTypes: true });

    await organizeFilesByExt(absolutePath, entries);
  } catch (err) {
    if (err.code === "ENOENT") {
      console.error("The provided path does not exist.");
    } else {
      console.error(err.message);
    }
    process.exit(1);
  }
}

organizeFiles(inputPath);
