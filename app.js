console.log('Starting notes app.');

const fs = require('fs');
const os = require('os');

var user = os.userInfo();
console.log(user.username);

fs.appendFile('greetings.txt', `hello ${user.username}!`, function(err){
  if(err){
    console.log('unable to write file: ' + err);
  }
});
