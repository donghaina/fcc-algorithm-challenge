function drop(arr, func) {
  // Drop them elements.

  console.log('arr.filter(func)', arr.filter(func));
  var dropIndex = arr.indexOf(arr.filter(func)[0]);
  console.log('dropIndex', dropIndex);
  if (dropIndex === -1) {
    return [];
  } else {
    return arr.slice(dropIndex);
  }
}

console.log(drop([1, 2, 3, 4], function (n) {
  return n > 5;
}));

