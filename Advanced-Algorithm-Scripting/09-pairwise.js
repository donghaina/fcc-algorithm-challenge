function pairwise(arr, arg) {
  var len = arr.length;
  var pairArr = [];
  for (var i = 0; i < len; i++) {
    for (var j = 1; j < (len - 1); j++) {
      if (arr[i] + arr[j] === arg) {
        // console.log(i,j);
        if(i!==j){
          if ((pairArr.indexOf(i) === -1)&&(pairArr.indexOf(j) === -1)) {
            pairArr.push(i, j);
          }
        }
      }
    }
  }
  console.log('pairArr:', pairArr);
  pairArr = unique(pairArr);
  console.log('pairArr:', pairArr);
  var pairwise = pairArr.reduce(function (p1, p2) {
    return p1 + p2;
  }, 0);
  console.log('pairwise:', pairwise);
  return pairwise;
}

function unique(arr) {
  var temp = [];
  arr.forEach(function (item) {
    if (temp.indexOf(item) === -1) {
      temp.push(item);
    }
  });
  return temp;
}
console.log(pairwise([1, 4, 2, 3, 0, 5], 7) );
console.log(pairwise([1, 3, 2, 4], 4));
console.log(pairwise([1, 1, 1], 2));
console.log(pairwise([0, 0, 0, 0, 1, 1], 1));
console.log(pairwise([], 100));