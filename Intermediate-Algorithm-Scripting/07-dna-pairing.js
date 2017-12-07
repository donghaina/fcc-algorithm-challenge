function pair(str) {
  var dnaMap = {
    'A': 'T',
    'T': 'A',
    'G': 'C',
    'C': 'G'
  };
  var arr = str.split('');
  console.log(arr);
  var newArr = [];
  arr.forEach(function (item) {
    newArr.push([item,dnaMap[item]])
  });
  return newArr;
}

console.log(pair("GCG"));

