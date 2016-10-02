function main(array, rotations) {
  var arr = array;
  var x = rotations;

  function rotate() {
    var temp = arr.pop();
    arr.push(temp)
  }

  for (var i = 0; i < rotations; i++) {
    rotate();
  }

  console.log(arr);

}

main([1, 2, 3, 4, 5])