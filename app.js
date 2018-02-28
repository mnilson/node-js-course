console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');

var filteredArray = _.uniq(['pth2mn', 1, 'pth2mn', 2, 3, 4]);
console.log(filteredArray);

// var res = notes.addNote();
// console.log(res);
// console.log(notes.add(9, -2));

// var user = os.userInfo();
// console.log(user.username);
//
// fs.appendFile('greetings.txt', `hello ${user.username}! You are ${notes.age}.`, function(err){
//   if(err){
//     console.log('unable to write file: ' + err);
//   }
// });
