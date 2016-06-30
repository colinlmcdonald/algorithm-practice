var BubbleSort = function (arr) {
  var results = arr.splice(0);
  console.log(results, "<------results")
  function check(arr1, arr2) {
    arr1 = results.sort(function(a, b){return a - b});
    arr2 = results;
    if(arr1.length !== arr2.length) {
        return false;
      } else {
    for(var i = arr1.length; i--;) {
      if(arr1[i] !== arr2[i]){
          return false;
      }
    }
    }
    return true;
  }

  function sort(results) {
    for( var i = 0; i < results.length; i++){
      if(results[i] > results[i + 1]) {
      console.log(results, "<------results2");
      var temp = results[i];
      results[i] = results[i + 1];
      results[i + 1] = temp;
      }
    }
  }
  
  if (check (results)) {
    return results 
  } else {
    sort(results);
  } 
};

var test = [6, 3, 8, 2, 1, 9, 7]

console.log(BubbleSort(test));