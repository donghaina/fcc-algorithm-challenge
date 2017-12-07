function telephoneCheck(str) {
  // 祝你好运
  var regx = /^(([1?])([\s-]?)([(]?\d{3}[)]?))([\s-]?)(\d{3})[-\s?](\d{4})/g;
  return regx.test(str);
}



console.log(telephoneCheck("5555555555"));

