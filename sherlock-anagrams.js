var fs = require('fs');

function processData(input) {
  var split = input.split('\n');
  split.splice(0, 1);
  console.log(split);
}

processData(fs.readFileSync('./sherlock-anagrams.txt', 'utf8'))