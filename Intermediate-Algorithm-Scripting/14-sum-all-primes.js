function sumPrimes(num) {
  if(num<2){
    return 0;
  }
  var primes = [];
  for(var i=1; i<=num;i++){
    for(var j=2;j<i;j++){
      if(i%j===0){
        break;
      }
    }
    if(i<=j && i!==1){
      primes.push(i)
    }
  }
  var primesSum = primes.reduce(function (a,b) {
    return a+b;
  });
  return primesSum;
}

console.log(sumPrimes(10));