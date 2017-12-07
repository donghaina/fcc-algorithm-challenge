function mutation(arr) {
  var newArr = [];
  arr.forEach(function (item) {
    newArr.push(item.toLowerCase());
  });
  return newArr[1].split('').every(function (item) {
    return newArr[0].indexOf(item) !== -1;
  });
}

mutation(["HEllo", "HEy"]);
