'use strict';
// module.exports = function makeCounter(someObj) {
//     var num = 0;
//       someObj.next = function() {
//         // complete me
//         num++;
//         return {
//           value: num,
//           done: num > 10 ? true : false
//         }
//       }
    
//     }


// module.exports = function filterForNumbers(iterable) {
//       // loop over iterable, adding numeric values to a new array
//       // then return the new array of numbers
//       var itr = iterable[Symbol.iterator]();
//       var results = [];
//       for (var i of itr) {
//         if (typeof i === 'number') {
//           results.push(i)
//         }
//       }
//       return results;
//     }

// module.exports = function generate(isEven) {
//   var even = 0;
//   var odd = -1;
//   if (isEven) {
//     return {
//       next: function(bool) {
//         return {
//           value: bool ? even += 1 : even += 2,
//           next: this.next
//         }
//       }
//     }
//   } else {
//     return {
//       next: function(bool) {
//         return {
//           value: bool ? odd += 1 : odd += 2,
//           next: this.next
//         }
//       }
//     }
//   }
// }

// module.exports = function *generate(isEven) {
//       // `yield` either odd or even numbers based on `isEven`
//       var num = isEven ? 0 : -1;
//       while (true) {
//         yield num += 2;
//       }
//     }

function *multiplier() {
  var num = 0,
      multiplier = 1;

  while(true) {
    num++;
    multiplier = yield num * multiplier;
    if (!multiplier) {
      multiplier = 1;
    }
  }
}

    var it = multiplier();
    console.log(it.next().value) // 1
    console.log(it.next().value) // 2
    console.log(it.next(2).value) // 6 (2 * 3)
    console.log(it.next(5).value) // 20 (5 * 4)
    console.log(it.next(3).value) // 15 (3 * 5)