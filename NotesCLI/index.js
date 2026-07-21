const { addNote, listNotes, deleteNote, updateNote } = require("./notes.js");

const command = process.argv[2];
const input = process.argv[3];

async function main() {
  if (!command) {
    console.error("Please provide a command.");
    process.exit(1);
  }

  switch (command) {
    case "add":
      if (!input) {
        console.error("Please provide note content.");
        process.exit(1);
      }

      await addNote(input);
      break;

    case "list":
      await listNotes();
      break;

    case "delete":
      if (!input) {
        console.error("Please provide the Id of the note to be deleted.");
        process.exit(1);
      }
      await deleteNote(input);
      break;

    case "update":
      if (!input) {
        console.error("Please provide the Id of the note to be updated.");
        process.exit(1);
      }
      await updateNote(input, process.argv[4]);
      break;

    default:
      console.error("Unknown command: ", command);
      process.exit(1);
  }
}

main().catch((error) => {
  console.error("Unexpected error: ", error);
  process.exit(1);
});
