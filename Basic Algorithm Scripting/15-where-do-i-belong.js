function where(arr, num) {
  arr.push(num)
  var newArr = arr.sort(function (a, b) {
    return a - b;
  });
  return newArr.indexOf(num);
}

where([40, 60], 50);

