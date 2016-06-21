var match = function(s1, s2) {

  var storage = {};

  var pattern = function(str) {
    if (str.length === 0) {
      return;
    }
    else if (!storage[str]) {
      storage[str] = true;
    }
    pattern(str.slice(0, str.length-1))
  };
  pattern(s1)
  for (var key in storage) {
    var temp = s1.split(key).splice(1, s1.length - 1);
    if (temp.length > 1 && s1.indexOf(temp[0])) {
      console.log(temp);
    }
  }
};


var str = 'blackblueblackblueblackblue';
var str2 = 'ababab';
var str3 = 'rrrraaarrrraaaarrr';
var str4 = 'labradorwhorelabradorwhore';

console.log(match(str, str2));
// console.log(match(str3, str4));
