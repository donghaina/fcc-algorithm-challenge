function sym(args) {
  var argsArr = Array.prototype.slice.call(arguments);
  console.log(argsArr);
  argsArr.forEach(function (item,index,array) {
    array[index] = unique(item);
  });
  console.log(argsArr);
  return argsArr.reduce(function (p1, p2) {
    return diff(p1,p2);
  });
}

function diff(arr1,arr2) {
  var arr = arr1.concat(arr2).sort(function (a,b) {
    return a-b;
  });
  for(var k=1; k<arr.length; k++){
    if(arr[k] === arr[k-1]){
      delete arr[k-1];
      delete arr[k];
    }
  }
  return arr.filter(function (item) {
    return Boolean(item);
  });
}

function unique(array) {
  var temp = [];
  var arr = array.sort(function (a,b) {
    return a-b;
  });
  arr.forEach(function (item) {
    if(temp.indexOf(item)===-1){
      temp.push(item);
    }
  });
  return temp;
}

console.log(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]));