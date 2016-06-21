var fs = require('fs');

function processData(input) {
  //Enter your code here
  input = input.split('\n')
  var target = input.splice(0, 1)
  var nums = input.splice(0, 1)
  input = input[0].split(' ')
  input.forEach(function(val, i) {
    if (val == target) {
      console.log(i);
    }
  })
} 

processData(fs.readFileSync('./tutorial-intro.txt', 'utf8'))