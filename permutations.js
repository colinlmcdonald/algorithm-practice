'use strict'
const permutations = (string) => {
  debugger;
  let stringCopy = string.split('');
  let results = [];

  if (string.length === 0) {
    results.push(string);
  }

  for (let i = 0; i < string.length; i++) {
    let remainingLetters = stringCopy.join('').split('');
    let base = remainingLetters.splice(i, 1);

    let combos = permutations(remainingLetters.join(''));
    console.log('combo', combos);

    for (let j = 0; j < combos.length; j++) {
      console.log('base', base);
      results.push(base.concat(combos[j]).join(''));
    }
  }

  return results;
}

console.log(permutations('abc')); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]