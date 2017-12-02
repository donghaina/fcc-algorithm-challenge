function slasher(arr, howMany) {
  if (arr.length > howMany) {
    return arr.slice(howMany);
  } else {
    return [];
  }
}

slasher([1, 2, 3], 2);