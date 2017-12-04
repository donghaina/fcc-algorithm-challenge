function myReplace(str, before, after) {
  var regx = /[A-Z]/;
  var newStr = '';
  console.log(regx.test(before[0]));
  if(regx.test(before[0])){
    newStr = str.replace(before,after.slice(0,1).toUpperCase()+after.slice(1));
    return newStr;
  }else{
    newStr = str.replace(before,after);
    return newStr;
  }
}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));

