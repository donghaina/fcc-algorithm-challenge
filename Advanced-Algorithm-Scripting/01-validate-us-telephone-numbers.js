function telephoneCheck(str) {
  // 祝你好运
  var regx = /^([(]?\d{3}[)]?)[-]?\d{3}[-]?(\d{4})$/g;
  var reg_brackets_len = /[(]|[)]/g;
  var newStr = str.replace(/\s/g,'');
  var num_len = numLen(str);
  var brackets_len;
  if(newStr.match(reg_brackets_len)){
    brackets_len = newStr.match(reg_brackets_len).length
  }else{
    brackets_len = 0;
  }
  console.log(newStr);
  if(brackets_len%2===0){
    if(num_len===10){
      return regx.test(newStr);
    }else if(num_len===11){
      return /^1/.test(newStr);
    } else{
      return false;
    }
  }else{
    return false;
  }

}
function numLen(str) {
  var i=0;
  var len = str.length;
  var reg_num = /\d/;
  var num_len = 0;

  for(i;i<len;i++){
    if(reg_num.test(str[i])){
      num_len++;
    }
  }

  return num_len;
}


console.log(telephoneCheck("555-555-5555"));
console.log(telephoneCheck("1 555-555-5555"));
console.log(telephoneCheck("1 (555) 555-5555"));
console.log(telephoneCheck("5555555555"));
console.log(telephoneCheck("555-555-5555"));
console.log(telephoneCheck("(555)555-5555"));
console.log(telephoneCheck("1(555)555-5555"));
console.log(telephoneCheck("1 555)555-5555"));
console.log(telephoneCheck("1 555 555 5555"));
console.log(telephoneCheck("1 456 789 4444"));
console.log(telephoneCheck("123**&!!asdf#"));
console.log(telephoneCheck("55555555"));
console.log(telephoneCheck("(6505552368)"));
console.log(telephoneCheck("2 (757) 622-7382"));
console.log(telephoneCheck("0 (757) 622-7382"));
console.log(telephoneCheck("-1 (757) 622-7382"));
console.log(telephoneCheck("10 (757) 622-7382"));
console.log(telephoneCheck("27576227382"));
console.log(telephoneCheck("(275)76227382"));
console.log(telephoneCheck("2(757)6227382"));
console.log(telephoneCheck("2(757)622-7382"));
console.log(telephoneCheck("555)-555-5555"));
console.log(telephoneCheck("(555-555-5555"));


