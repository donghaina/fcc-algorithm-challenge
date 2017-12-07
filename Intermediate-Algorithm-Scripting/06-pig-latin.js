function translate(str) {
  var regx = /[aeiou]/;
  var newStr = "";
  if(regx.test(str[0])){
    newStr = str + 'way';
    return newStr;
  }else{
    var index = str.indexOf(str.match(regx)[0]);
    newStr = str.slice(index)+str.slice(0,index)+'ay';
    return newStr;
  }
}

console.log(translate("glove"));