console.log('Starting notes.js');
const fs = require('fs');

var fetchNotes = () => {
  try {
    return JSON.parse(fs.readFileSync('notes-data.json'));
  } catch (e) {
    return [];
  };
};

var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
  var notes = fetchNotes();
  var note = {
    title,
    body
  };

  var duplicateNotes = notes.filter((note) => note.title === title);
  console.log(note);
  console.log(duplicateNotes);
  if (duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    console.log('Saved');
    return note;
  }
};

var removeNote = (title) => {
  var notes = fetchNotes();
  var newNotes = notes.filter((note) => note.title != title);
  saveNotes(newNotes);
  return newNotes.length !== notes.length;
};

var getAll = () => {
  return fetchNotes();
};

var getNote = (title) => {
  var notes = fetchNotes();
  var foundNotes = notes.filter((note) => note.title === title);
    return foundNotes[0];
};

var printNote = (note) => {
  console.log('--');
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
};

module.exports = {
  addNote,
  removeNote,
  getAll,
  getNote,
  printNote
};
