const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const command = process.argv[2];
const titleOptions = {
    describe: 'Title of note',
    demand: true,
    alias: 't'
};
const bodyOptions = {
    describe: 'Body of note',
    demand: true,
    alias: 'b'
};
const argv = yargs
    .command('add', 'Add a new note', {
        title: titleOptions,
        body: bodyOptions
    })
    .command('list', 'List all notes')
    .command('read', 'Read a note', { title: titleOptions })
    .command('remove', 'Remove a note', { title: titleOptions })
    .help()
    .argv;

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
