function permutations(input) {
  var base, combos, permutation, results = [];
  if (input.length === 1) {
    results.push(input);
  };

  for (var i = 0; i < input.length; i++) {
    base = input[i];
    combos = permutations(input.slice(0).replace(base, ''));
    for (var j = 0; j < combos.length; j++) {
      permutation = base + combos[j]
      results.push(permutation)
    }
  }

  return results;
};

function permutator(inputArr) {
  var results = [];

  function permute(arr, memo) {
    var cur, memo = memo || [];

    for (var i = 0; i < arr.length; i++) {
      cur = arr.splice(i, 1);
      if (arr.length === 0) {
        results.push(memo.concat(cur).join(''));
      }
      permute(arr.slice(), memo.concat(cur));
      arr.splice(i, 0, cur[0]);
    }

    return results;
  }

  return permute(inputArr.split(''));
}

allAnagrams = function(string) {
 var anagrams = {};
 var generator = function(text, options){
   if (text.length === string.length){
     anagrams[text] = true
   }
   for (var i = 0; i < options.length; i++){   
    console.log(text, options);
     generator(text + options[i], options.slice(0, i) + options.slice(i+1))
   }
 }
 generator('', string);
 return Object.keys(anagrams);  
}

console.log(permutations('abcd'));
//['abcd', 'abdc', 'acdb', 'acbd', 'adbc', 'aa']

function fib(x) {
  var memo = {};
  var subroutine = function(n) {
    if (memo[n]) return memo[n]
    if (n < 2) {
      return n;
    } else {
      f = subroutine(n - 2) + subroutine(n - 1);
      memo[n] = f;
      return f;
    }
  }
  return subroutine(x)
}

// console.log(fib(100));