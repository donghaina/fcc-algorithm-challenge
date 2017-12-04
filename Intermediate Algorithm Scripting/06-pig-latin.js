function translate(str) {
  var regx = /[aeiou]/;
  var newStr = "";
  if(regx.test(str[0])){
    newStr = str + 'way';
    return newStr;
  }else{
    newStr = str.slice(1)+str.slice(0,1)+'ay';
    return newStr;
  }
}

console.log(translate("glove"));