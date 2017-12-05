function fearNotLetter(str) {
  var arr = str.split('');
  var start = str.charCodeAt(0);
  var end = str.charCodeAt(str.length-1);
  var newArr = []
  for(var i=start;i<=end;i++){
    newArr.push(String.fromCharCode(i))
  }
  var result = '';
  arr.forEach(function (item) {
    if(newArr.indexOf(item) !== -1){
      result = newArr.indexOf(item);
    }
  });
  return newArr[result];
}

console.log(fearNotLetter("abce"));