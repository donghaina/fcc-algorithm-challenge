function findLongestWord(str) {
  var arr = str.split(' ');
  arr.forEach(function (item, index, arr) {
    arr[index] = item.length;
  });
  return arr.reduce(function (a, b) {
    return Math.max(a, b);
  });
}

findLongestWord("The quick brown fox jumped over the lazy dog");