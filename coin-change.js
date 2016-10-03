function makeChange(n, coins) {
  var totalOptions = 0;
  coins.forEach(function(coin) {
    findValues(coin, coins);
  })

  function findValues(currentValue, rest) {
    if (!rest.length) return;
    else if (currentValue + rest[0] === n) {
      totalOptions++
      findValues(currentValue, rest.slice(1));
    }
    else if (currentValue + rest[0] < n) {
      currentValue += rest[0];
      findValues(currentValue, rest.slice(1));
      findValues(currentValue, rest);
    } else {
      findValues(currentValue, rest.slice(1))
    }
  }
  console.log(totalOptions);
}
makeChange(10, [2, 5, 3, 6])
makeChange(75, [25, 10, 11, 29, 49, 31, 33, 39, 12, 36, 40, 22, 21, 16, 37, 8, 18, 4, 27, 17, 26, 32, 6, 38, 2, 30, 34]);