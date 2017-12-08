function sym(args) {
  var argsArr = Array.prototype.slice.call(arguments);
  console.log(argsArr);
  return argsArr.reduce(function (p1, p2) {
    return diff(p1,p2);
  });
}

function diff(arr1,arr2) {
  for(var i=1; i<arr1.length; i++){
    if(arr1[i] === arr1[i-1]){
      delete arr1[i];
    }
  }
  console.log(arr1);
  for(var j=1; j<arr2.length; j++){
    if(arr2[j] === arr2[j-1]){
      delete arr2[j];
    }
  }
  console.log(arr2);
  var arr = arr1.concat(arr2).sort(function (a,b) {
    return a-b;
  });
  console.log(arr);
  for(var k=1; k<arr.length; k++){
    if(arr[k] === arr[k-1]){
      delete arr[k-1];
      delete arr[k];
    }
  }

  var newArr = arr.filter(function (item) {
    return Boolean(item);
  });
  console.log(newArr);
  return newArr;
}

console.log(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]));