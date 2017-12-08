function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var result = [];
  arr.forEach(function (item) {
    var R = earthRadius + item.avgAlt;
    var T = Math.round(2*Math.PI*Math.sqrt(Math.pow(R,3)/GM));
    result.push({
      name: item.name,
      orbitalPeriod: T
    })
  });
  console.log(result);
  return result;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);