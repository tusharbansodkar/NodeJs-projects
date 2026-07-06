# Folder Info

A Node.js utility that displays information about a folder, including the folder name, full path, number of subdirectories, and number of files.

## How to Run

### 1. Basic Usage (Current Directory)

To get info about the current working directory:

```bash
node folderInfo.js
```

### 2. Specific Folder Path

To get info about a specific folder, provide the folder path as an argument:

```bash
node folderInfo.js /path/to/folder
```

### Examples

```bash
# Display info about the current directory
node folderInfo.js

# Display info about the NodeJs projects folder
node folderInfo.js "d:\NodeJs projects"

# Display info about the parent directory
node folderInfo.js ..
```

## Output

The script will display:

- **Folder:** The name of the folder
- **Path:** The full path to the folder
- **Folders:** Number of subdirectories
- **Files:** Number of files

## Error Handling

If the specified path doesn't exist or cannot be read, an error message will be displayed.
