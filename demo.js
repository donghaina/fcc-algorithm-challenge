var curInv = [
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"]
];

var newInv = [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"]
];

function arr2obj(arr) {
  var inv = {};
  arr.forEach(function (item) {
    inv[item[1]]=item[0];
  });
  return inv;
}

curInv = arr2obj(curInv);
newInv = arr2obj(newInv);
var curInvKeys = Object.keys(curInv);
// console.log(curInvKeys);
for(var prop in newInv){
    if(curInvKeys.indexOf(prop) === -1){
      curInv[prop] = newInv[prop];
    }else{
      curInv[prop] += newInv[prop];
    }
}
curInvKeys = Object.keys(curInv).sort();

// console.log(curInvKeys);
// console.log(curInv);
var result = [];
// for(var prop in curInv){
//   result.push([curInv[prop],prop])
// }
curInvKeys.forEach(function (item) {
  result.push([curInv[item],item])
});
// var newResult = result.sort();
console.log(result);