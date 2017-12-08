function unique(array) {
  var arr = array.sort(function (a,b) {
    return a-b;
  });
  var temp = [];
  arr.forEach(function (item) {
    if(temp.indexOf(item)===-1){
      temp.push(item);
    }
  });
  return temp;
}

console.log(unique([2, 1, 5, 7]));
