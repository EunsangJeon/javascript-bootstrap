const fs = require('fs');
const path = require('path');

const geometricSum = require('./amanda.js');
const sphereVolume = require('./tyler.js');
const nick = require('./nick');

console.log(geometricSum(1, 2, 5));
console.log(sphereVolume(2));
console.log(nick.add(1, 2));
console.log(nick.sub(2, 1));
console.log(nick.multi(3, 3));

fs.writeFile(
  path.join(__dirname, 'hello.txt'),
  'hello from node!',
  function(err) {
    if(err)
      return console.error(`Error writing to file.`);
  }
);

fs.readFile(
  path.join(__dirname, 'hello.txt'),
  {encoding: 'utf-8'},
  function(err, data) {
    if(err)
      return console.error('Error reading file');
    console.log('File contents:');
    console.log(data);
  }
);

fs.readdir(
  __dirname,
  function(err, files) {
    if(err)
      return console.error('Unable to read dir');
    console.log(`Contents of ${__dirname}:`);
    console.log(files.map(f => `\t${f}`).join('\n'));
  }  
);