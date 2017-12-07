function unite(arr1, arr2, arr3) {
  var args = Array.prototype.slice.call(arguments);
  var arr = args.reduce(function (p1, p2) {
    return p1.concat(p2)
  });
  console.log(arr);
  var newArr = [];
  arr.forEach(function (item) {
    if (newArr.indexOf(item) === -1) {
      newArr.push(item);
    }
  });
  return newArr;
}

console.log(unite([1, 3, 2], [5, 2, 1, 4], [2, 1]));