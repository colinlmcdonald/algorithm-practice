var fs = require('fs');

function processData(input) {
  var split = input.split('\n');
  var matrix = split.map(function(el) {
    return el.split(' ')
  })
  var bounds = matrix.splice(0, 1);

  matrix.forEach(function(el) {
    el.shift()
    el.sort(function(a, b) {
      return parseInt(a) < parseInt(b);
    })
  })

  console.log(matrix);
}



processData(fs.readFileSync('./Superman.txt', 'utf8'))