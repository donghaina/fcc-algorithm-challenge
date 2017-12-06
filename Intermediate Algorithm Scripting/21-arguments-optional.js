function add() {
  var args = Array.prototype.slice.call(arguments);
  console.log(args);
  var arrLen = args.length;
  console.log(arrLen);
  var result = args.every(function (item) {
    return (typeof item === 'number');
  });
  console.log(result);
  if(result){
    if(arrLen === 2){
      return args[0]+args[1];
    }else{
      return function (num) {
        console.log(num);
        console.log(isNaN(num));
        if(isNaN(num)||(typeof [2]!=='number')){
          return undefined;
        }else{
          return num+args[0];
        }
      };
    }
  }else{
    return undefined;
  }
}

// console.log(add(2, "3"));
console.log(add(2)(3));