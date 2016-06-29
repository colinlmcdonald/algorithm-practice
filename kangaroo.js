var fs = require('fs');

function processData(input) {
  var split = input.split(' ');
  console.log(split);
  var x1 = parseInt(split[0]);
  var v1 = parseInt(split[1]);
  var x2 = parseInt(split[2]);
  var v2 = parseInt(split[3]);

  if (x1 > x2 && v1 > v2 || x2 > x1 && v2 > v1) {
    return false;
  } else {
    if (v1 > v2) {
      //if v1 > v2, we end when the x1 is greater than or equal to x2
      while (x1 <= x2) {
        if (x1 === x2) {
          return true;
        } else {
          x1 = x1 + v1;
          x2 = x2 + v2;
        }
      }
    } else {
      //if v1 > v2, we end when the x1 is greater than or equal to x2
      while (x2 <= x1) {
        if (x1 === x2) {
          return true;
        } else {
          x1 = x1 + v1;
          x2 = x2 + v2;
        }
      }
    }
  }
  return false;
}

var yup = processData(fs.readFileSync('./kangaroo.txt', 'utf8'))
console.log(yup);