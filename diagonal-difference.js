var fs = require('fs');

function processData(input) {
  var split = input.split('\n')
  var matrix = split.map(function(el) {
    return el.split(' ')
  })
  matrix.splice(0, 1);
  var primary = matrix.reduce(function(start, el, i) {
    return start + parseInt(el[i])
  }, 0)

  var i = matrix.length;
  var secondary = matrix.reduce(function(start, el) {
    i--
    return start + parseInt(el[i])
  }, 0)

  console.log(Math.abs(primary - secondary));
};

processData(fs.readFileSync('./diagonal-difference.txt', 'utf8'))