function processData(input) {
    input = input.split('\n');
    var K = parseInt(input[0].split(' ')[1]);
    var nums = input[1].split(' ');
    var storage= [];
    var array = [];
    function processWindow(ints) {
      var high = [];
      for (var i = 0; i < ints.length; i++) {
        var temp = ints.slice(i, ints.length)
        if (temp.length) {
          high = high.concat(createPowerSets(temp))
        }
      }
      array.push(high)
    }

    function createPowerSets(arr) {
      var stupid = [];
      if (arr.length === 0) {
        return stupid;
      }
      stupid.push(arr)
      return stupid.concat(createPowerSets(arr.slice(0, arr.length - 1)))
    }
    //return a set of arrays

    function processPowerSet(set) {
      function processIncreasing(subset) {
        for (var i = 0; i < subset.length; i++) {
          if (subset[i] > subset[i + 1]) {
            return 0;
          }
        }
        return 1;
      }

      function processDecreasing(subset) {
        for (var i = 0; i < subset.length; i++) {
          if (subset[i] < subset[i + 1]) {
            return 0;
          }
        }
        return -1;
      }
      return processIncreasing(set) + processDecreasing(set)
    }

    function processPowerSets(sets) {
      var total = 0;
      for (var i = 0; i < sets.length; i++) {
        total += processPowerSet(sets[i])
      }
      return total;
    }

    for (var i = 0; i <= nums.length - K; i++) {
      for (var j = i; j < i + K; j++) {
        storage.push(nums[j]);
      }
      processWindow(storage);
      storage = [];
    };
    for (var i = 0; i < array.length; i++) {
      console.log(processPowerSets(array[i]));
    }
};

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
    process.stdin.emit('end')
});

process.stdin.on("end", function () {
   processData(_input);
});

process.stdin.emit('data', '5 3\n1 2 3 1 1')
