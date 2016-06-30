var fs = require('fs')

function processData(input) {
  if (!Array.isArray(input)) {
    input = input.split('\n');
    var length = input.splice(0, 1);
    input = input[0].split(' ');
  } 

  for (var i = 0; i < input.length; i++) {
    var temp = input[i]
    for (var j = i - 1; j >= 0 && (parseInt(input[j]) > parseInt(temp)); j--) {
      input[j+1] = input[j]
    }
    input[j+1] = temp;
    console.log(input);
  }
  console.log(input.join(' '));
}

//processData(fs.readFileSync('./insertion-sort2.txt', 'utf8'))


console.log(processData([5,7,3,8,4,10,2,0,49,39,5958,3,585,8]));