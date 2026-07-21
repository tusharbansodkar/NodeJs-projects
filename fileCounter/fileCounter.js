const fs = require("node:fs/promises");

const filePath = process.argv[2];

async function fileCounter(filePath) {
  try {
    if (!filePath) {
      throw new Error("Please provide a path to a file.");
    }

    let text = await fs.readFile(filePath, "utf-8");
    let wordCount = text.split(/\s+/).filter(Boolean).length;
    let lineCount = text.split(/\r?\n/).length;
    let charCount = text.length;

    console.log("File: ", filePath.split("/").pop());
    console.log("Word Count: ", wordCount);
    console.log("Line Count: ", lineCount);
    console.log("Character Count: ", charCount);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

fileCounter(filePath);
