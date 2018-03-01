console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

var command = process.argv[2];
console.log(`Command: ${command}`);

console.log(yargs.argv);
const argv = yargs.argv;

if(command === 'add'){
  notes.addNote(argv.title, argv.body);
}else if(command === 'remove'){
  notes.removeNote(argv.title);
}else if(command ==='list'){
  notes.getAll();
}else if (command ==='read'){
  notes.getNote(argv.title);
}else{
  console.log('Your princess is in a different castle.');
}
