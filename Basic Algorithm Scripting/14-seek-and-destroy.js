function destroyer(arr) {
  var args = Array.prototype.slice.call(arguments);
  // console.log(args);
  var target = args.slice(1);
  // console.log(target);
  var newArr = [];
  newArr = args[0].filter(function (val) {
    return val !== target[0];
  });
  target.forEach(function (item) {
    newArr = newArr.filter(function (val) {
      return val !== item;
    });
  });
  return newArr;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

