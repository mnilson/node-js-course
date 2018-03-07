const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const command = process.argv[2];

const [argv] = yargs.argv;

if (command === 'add') {
    const note = notes.addNote(argv.title, argv.body);
    if (note) {
        console.log('Note created');
        notes.printNote(note);
    } else {
        console.log(`Note title ${argv.title} already taken`);
    }
} else if (command === 'remove') {
    const res = notes.removeNote(argv.title);
    if (res) {
        console.log('Note removed');
    } else {
        console.log('Note not found');
    }
} else if (command === 'list') {
    const noteList = notes.getAll();
    console.log(`Printing ${noteList.length} note(s).`);
    noteList.forEach((note) => {
        notes.printNote(note);
    });
} else if (command === 'read') {
    const note = notes.getNote(argv.title);
    if (note) {
        notes.printNote(note);
    } else {
        console.log('Note not found');
    }
} else {
    console.log('Your princess is in a different castle.');
}
