var fs = require('fs');

function processData(input) {
  var split = input.split('\n');
  var total = split.splice(0, 1);
  var arr = split.map(function(el) {
    return el.split(' ')
  })
  console.log(arr[0]);
  var negative = 0;
  var positive = 0; 
  var zero = 0;

  arr[0].forEach(function(el) {
    if (parseInt(el) < 0) {
      negative++
    } else if (parseInt(el) > 0) {
      positive++
    } else {
      zero++
    }
  })
  console.log((negative / total).toFixed(6));
  console.log((positive / total).toFixed(6));
  console.log((zero / total).toFixed(6));
};

processData(fs.readFileSync('./plus-minus.txt', 'utf8'))