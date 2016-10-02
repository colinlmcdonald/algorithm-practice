function anagram(a, b) {
  var x = a.split('').sort().join('');
  var y = b.split('').sort().join('');

  var storage = {};
  var storage2 = {};

  for (var i = 0; i < x.length; i++) {
    if (storage[x[i]]) {
      storage[x[i]]++
    } else {
      storage[x[i]] = 1;
    }
  }

  for (var i = 0; i < y.length; i++) {
    if (storage[y[i]]) {
      if (storage2[y[i]]) {
        storage2[y[i]]++;
      } else {
        storage2[y[i]] = 1;
      }
      if (storage[y[i]] === 0) {
        delete storage[y[i]];
      } else {
        storage[y[i]]--;
      }
    } 
  }
  var count = 0;
  for (var key in storage) {
    count += storage[key];
  }
  var count2 = 0;
  for (var key in storage2) {
    count2 += storage2[key];
  }
  console.log(count + (y.length - count2));
}

anagram('cba', 'edc');