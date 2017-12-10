var tel ='2(757)6227382';

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

console.log(numLen(tel));

