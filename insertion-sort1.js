var fs = require('fs')

function processData(input) {
  input = input.split('\n');
  var length = input.splice(0, 1);
  input = input[0].split(' ');
  var target = input.splice(input.length - 1, 1);

  console.log(input);
  for (var i = input.length - 1; i >= -1; i--) {
    if (parseInt(input[i]) < parseInt(target)) {
      input[i + 1] = target;
      console.log(input.join(' '));
      return;
    } else if (i === -1) {
      input[i + 1] = input[i]
      input[i + 1] = target;
      console.log(input.join(' '));
    } else {
      input[i + 1] = input[i]
      console.log(input.join(' '));
    }
  }
}

processData(fs.readFileSync('./insertion-sort1-2.txt', 'utf8'))