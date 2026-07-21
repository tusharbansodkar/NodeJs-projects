# Notes CLI

A Node.js command-line note-taking utility that lets you add, list, update, and delete notes stored in a JSON file.

## How to Run

Run the CLI with a command and optional note content or note id:

```bash
node index.js <command> [argument] [newContent]
```

## Commands

- `add <note>` - Add a new note
- `list` - List all notes
- `delete <id>` - Delete a note by id
- `update <id> <newContent>` - Update a note by id

## Examples

```bash
# Add a note
node index.js add "Buy groceries"

# List notes
node index.js list

# Delete note with id 2
node index.js delete 2

# Update note with id 1
node index.js update 1 "Buy milk and eggs"
```

## Data Storage

Notes are stored in `notes.json` inside the `NotesCLI` folder.

## Error Handling

The CLI displays an error message if required arguments are missing, if the note id is invalid, or if file access fails.
