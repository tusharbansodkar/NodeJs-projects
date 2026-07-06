const fs = require("node:fs/promises");
const path = require("node:path");

const inputPath = process.argv[2];

const folderPath = inputPath ? path.resolve(inputPath) : process.cwd();

async function folderInfo(folderPath) {
  try {
    const entries = await fs.readdir(folderPath, { withFileTypes: true });

    const folderCount = entries.filter((entry) => entry.isDirectory()).length;
    const fileCount = entries.filter((entry) => entry.isFile()).length;

    console.log("Folder: ", path.basename(folderPath));
    console.log("Path: ", folderPath);
    console.log("Folders: ", folderCount);
    console.log("Files: ", fileCount);
  } catch (error) {
    console.error("error: could not read folder: ", inputPath || folderPath);
  }
}

folderInfo(folderPath);
