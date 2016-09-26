function missingWords(s, t) {
    var results = [];
  s = s. split(' ');
  t = t.split(' ');
  
  for (var i = 0; i < s.length; i++) {
        if (s[i] !== t[i - results.length]) {
            results.push(s[i])
        }
    }
    return results;
}

console.log(missingWords('I am using hackerrank to improve am programming', 'am hackerrank to improve'));