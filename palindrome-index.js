var fs = require('fs')

function processData(input) {
  var split = input.split('\n')
  var temp, tempLet, tempStr;
  split.splice(0, 1)
  split.forEach(function(str) {
    if (palindromeCheck(str)) {
      console.log(-1);
    } else {
      var final = -2
      var i = 0;
      while(final < -1) {
        temp = str.slice(0, i) + str.slice(i + 1)
          // console.log(temp);
        if (palindromeCheck(temp)) {
          final = i;
          // console.log(i);
        }
        i++
      }
      console.log(final);
    }
  })
  function palindromeCheck(str) {
    var end = str.length - 1
    for (var i = 0; i < str.length - 1; i++) {
      if (str[i] !== str[end]) {
        return false
      }
      end--
    }
    return true
  }
}


function processData(input) {
  var split = input.split('\n')
  var temp;
  split.splice(0, 1)
  split.forEach(function(str) {
    var check = palindromeCheck(str)
    // console.log(check);
    if (check === true) {
      console.log(-1);
    } else {
      temp = str.slice(0, check[0]) + str.slice(check[0] + 1)
      if (palindromeCheck(temp) === true) {
        console.log(check[0]);
      } else {
        console.log(check[1]);
      }
    }
  })
  function palindromeCheck(str) {
    console.log(str);
    var end = str.length - 1
    for (var i = 0; i < str.length - 1; i++) {
      if (str[i] !== str[end]) {
        return [i, end]
      }
      end--
    }
    return true
  }
}

processData(fs.readFileSync('./palindrome-index.txt', 'utf8'))

