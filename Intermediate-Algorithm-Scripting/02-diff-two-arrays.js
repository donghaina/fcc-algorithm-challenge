function diff(arr1, arr2) {
  var newArr = [];
  arr1.forEach(function (item1, index1, array1) {
    arr2.forEach(function (item2, index2, array2) {
      if (item1 === item2) {
        delete array1[index1];
        delete array2[index2];
      }
    })
  });
  newArr = arr1.concat(arr2)
  var filteredArr = newArr.filter(function (item) {
    return Boolean(item)
  })
  // console.log(filteredArr);
  return filteredArr;
}

diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);

