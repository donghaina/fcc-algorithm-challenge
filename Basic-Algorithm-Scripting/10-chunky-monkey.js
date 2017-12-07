function chunk(arr, size) {
  var newArr = [];
  for(var i=0; i<arr.length; i++){
    if(i%size==0){
      newArr.push(arr.slice(i,i+size));
    }
  }
  return newArr;
}

chunk(["a", "b", "c", "d"], 2);

