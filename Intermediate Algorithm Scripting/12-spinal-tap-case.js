function spinalCase(str) {
  var regx = /[\s]|_|(?=[A-Z])|-/;
  var strArr = str.split(regx);
  var newArr = strArr.map(function (item) {
    return item.toLowerCase();
  });
  return newArr.join('-');
}

console.log(spinalCase('Teletubbies say Eh-oh'));

