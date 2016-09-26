'use strict';

// function *range(from, to) {
//   var x = from;
//   while (x <= to) {
//     yield x;
//     x++
//   }
// }


// for (var r of range(5, 10)) {
//   console.log( r );
// }

function *factorial(n){
      // your code here
  for (var i = 1; i <= n; i++) {
    var temp = [];
    for (var k = i; k > 0; k--) {
      temp.push(k)
    }
    yield temp.reduce((start, value) => {
      start = start * value;
      return start
    });
  }
}

    for (var n of factorial(5)) {
      console.log(n)
    }