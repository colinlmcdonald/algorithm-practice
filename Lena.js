var fs = require('fs')

function processData(input) {
  var split = input.split('\n')
  var matrix = split.map(function(el) {
    return el.split(' ')
  })
  var split = matrix.splice(0, 1)
  var max = parseInt(split[0][1]);
  var important = 0;
  var total = 0;

  matrix.sort(function(a, b) {
    return parseInt(a[0]) < parseInt(b[0])
  });
  matrix.sort(function(a, b) {
    return parseInt(a[1]) > parseInt(b[1])
  })
  console.log(matrix);

  matrix.forEach(function(el) {
    if (important === max && el[1] == 1) {
      total -= parseInt(el[0])
    } else {
      total += parseInt(el[0])
      if (el[1] == 1) {
        important++
      }
    }
  })
  console.log(total);
  // matrix.forEach(function(el) {
  //   if (el[1] == 1) {
  //     important++
  //   }
  // })
  // var subtract = matrix.splice(matrix.length - (important - max), matrix.length)
  // matrix.forEach(function(el) {
  //   total += parseInt(el[0])
  // })
  // console.log(subtract);
  // if (subtract.length) {
  //   subtract.forEach(function(el) {
  //     total -= parseInt(el[0])
  //   })
  // }
  // console.log(total);
};


processData(fs.readFileSync('./Lena.txt', 'utf8'))