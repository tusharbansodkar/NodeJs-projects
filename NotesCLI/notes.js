const fs = require("node:fs/promises");
const path = require("node:path");

const FILE_PATH = path.join(__dirname, "notes.json");

async function readNotes() {
  try {
    const fileContent = await fs.readFile(FILE_PATH, "utf8");

    if (!fileContent.trim()) {
      return [];
    }

    return JSON.parse(fileContent);
  } catch (error) {
    if (error.code === "ENOENT") {
      return;
    }

    throw error;
  }
}

async function writeNotes(notes) {
  try {
    await fs.writeFile(FILE_PATH, JSON.stringify(notes, null, 2), "utf-8");
  } catch (error) {
    console.error("Failed to write notes", error.message);
  }
}

async function addNote(input) {
  try {
    const notes = await readNotes();

    const newNote = {
      id: notes.length + 1,
      content: input,
    };

    notes.push(newNote);

    await writeNotes(notes);
    console.log("Note added successfully!");
  } catch (error) {
    console.error("failed to add note:", error.message);
  }
}

async function listNotes() {
  try {
    const notes = await readNotes();

    if (notes.length === 0) {
      console.log("No notes found.");
      return;
    }

    for (const note of notes) {
      console.log(note.id + ". " + note.content);
    }
  } catch (error) {
    console.error("Failed to list notes", error.message);
  }
}

async function deleteNote(id) {
  try {
    const notes = await readNotes();

    id = parseInt(id);

    if (id > notes.length || id < 1) {
      console.error("Invalid note Id.");
      return;
    }

    let updatedNotes = notes.filter((note) => note.id !== id);

    // reassigning the IDs
    updatedNotes = updatedNotes.map((note, index) => {
      return {
        ...note,
        id: index + 1,
      };
    });

    await writeNotes(updatedNotes);

    console.log("Note deleted successfully.");
  } catch (error) {
    console.error("Failed to delete note", error.message);
  }
}

async function updateNote(id, newContent) {
  try {
    const notes = await readNotes();

    id = parseInt(id);

    if (id > notes.length || id < 1) {
      console.error("Invalid note Id.");
      return;
    }

    const newNotes = notes.map((note) => {
      if (note.id === id) {
        return { ...note, content: newContent };
      }
      return note;
    });

    await writeNotes(newNotes);
    console.log("Note updated successfully.");
  } catch (error) {
    console.error("Failed to update note", error.message);
  }
}

module.exports = {
  addNote,
  listNotes,
  deleteNote,
  updateNote,
};
