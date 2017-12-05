function fearNotLetter(str) {
  var arr = str.split('');
  // console.log(arr);
  var start = str.charCodeAt(0);
  var end = str.charCodeAt(str.length-1);
  var newArr = [];
  for(var i=start;i<=end;i++){
    newArr.push(String.fromCharCode(i));
  }
  // console.log(newArr);
  var result = '';
  if(arr.join('') === newArr.join('')){
    result = undefined;
  }else{
    newArr.forEach(function (item) {
      if(arr.indexOf(item) === -1){
        result = item;
      }
    });
  }
  return result;
}

console.log(fearNotLetter("abce"));