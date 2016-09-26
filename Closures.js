var func = function(state) {

  var oldState = state;

  return function(state) {
    if (oldState === state) {
      console.log(oldState, state);
      return true;
    }
  }
}

var obj1 = {
  hello: 'world'
}

var what = func(obj1);
obj1.goodbye = 'me'
console.log(what(obj1));