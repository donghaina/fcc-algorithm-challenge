function steamroller(arr) {
  var result = [];
  function flatten(arr) {
    arr.forEach(function(item){
      if(Array.isArray(item)){
        flatten(item)
      }else{
        result.push(item)
      }
    })
  }
  flatten(arr);
  return result;
}

console.log(steamroller([1, [2], [3, [[4]]]]));