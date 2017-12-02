function largestOfFour(arr) {
  var newArr = [];
  arr.forEach(function (item) {
    newArr.push(item.reduce(function (a, b) {
      return Math.max(a, b);
    }));
  });
  return newArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

