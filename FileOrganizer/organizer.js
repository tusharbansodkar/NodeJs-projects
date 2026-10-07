const categories = require("./categories");
const fs = require("node:fs/promises");
const path = require("node:path");

async function organizeFilesByExt(absolutePath, entries) {
  for (const entry of entries) {
    if (entry.isFile()) {
      const fileExtension = path.extname(entry.name).slice(1).toLowerCase();
      let folder = "Other";

      for (const category in categories) {
        if (categories[category].includes(fileExtension)) {
          folder = category.charAt(0).toUpperCase() + category.slice(1);
          break;
        }
      }

      const sourcePath = path.join(absolutePath, entry.name);
      const targetDir = path.join(absolutePath, folder);
      await fs.mkdir(targetDir, { recursive: true });

      let targetPath = path.join(targetDir, entry.name);
      let counter = 1;

      while (true) {
        try {
          await fs.access(targetPath);

          targetPath = path.join(
            targetDir,
            `${path.parse(entry.name).name} (${counter})${path.extname(entry.name)}`,
          );
          counter++;
        } catch (err) {
          if (err.code === "ENOENT") {
            break;
          }

          throw err;
        }
      }

      await fs.rename(sourcePath, targetPath);

      console.log(`Successfully moved: ${entry.name} -> ${folder}/`);
    }
  }
}

module.exports = organizeFilesByExt;
