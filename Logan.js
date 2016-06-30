var fs = require('fs');

function processData(input) {
  var split = input.split('\n');
  var permutations = split.splice(0, 1);
  var n = parseInt(permutations[0]);
  var matrix = split.map(function(el) {
    return el.split(' ')
  })
  var m = (1-1/n)^2;
  var z = 1/n;
  console.log(z/m^2);
  console.log((1/n) / (1-1/n^2));
};



processData(fs.readFileSync('./Logan.txt', 'utf8'))