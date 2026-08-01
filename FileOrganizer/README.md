# File Organizer

A simple Node.js command-line utility that organizes files in a selected directory into category folders based on file extension.

## Features

- Moves files into folders such as `Images`, `Videos`, `Audio`, `Documents`, `Archives`, and `Code`
- Places unknown file types into an `Other` folder
- Avoids overwriting existing files by adding numbered suffixes when needed

## Usage

Run the script with the directory path you want to organize:

```bash
node .\index.js <directory-path>
```

Example:

```bash
node .\index.js D:\files
```

## Notes

- The target path must be a valid directory.
- Existing files with the same name are automatically renamed using a counter.
