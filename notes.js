console.log('Starting notes.js');
const fs = require('fs');

var addNote = (title, body) => {
  console.log('Adding note', title, body);
  var notes = [];
  var note = {
    title,
    body
  };

try{
  var notes = JSON.parse(fs.readFileSync('notes-data.json'));
}catch (e){
  console.log('Error while parsing file.', e);
};

var duplicateNotes = notes.filter((note) => note.title === title);

if(duplicateNotes.length === 0){
  notes.push(note);
}else{
  // duplicateNotes[0]
}

  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var removeNote = (title) => {
  console.log('Removing note', title);
};

var getAll = () => {
  console.log('Getting all notes');
};

var getNote = (title) => {
  console.log("Reading note", title);
};


module.exports = {
    addNote,
    removeNote,
    getAll,
    getNote
};
