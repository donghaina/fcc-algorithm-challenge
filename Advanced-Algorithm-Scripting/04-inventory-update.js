function updateInventory(arr1, arr2) {
  curInv = arr2obj(arr1);
  newInv = arr2obj(arr2);
  var curInvKeys = Object.keys(curInv);
  for(var prop in newInv){
    if(curInvKeys.indexOf(prop) === -1){
      curInv[prop] = newInv[prop];
    }else{
      curInv[prop] += newInv[prop];
    }
  }
  curInvKeys = Object.keys(curInv).sort();
  var result = [];
  curInvKeys.forEach(function (item) {
    result.push([curInv[item],item])
  });
  return result;
}

// 仓库库存示例
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
updateInventory(curInv, newInv);