function sumFibs(num) {
  var fibs = [1,1];
  var numa,numb,result,sum;
  numa = numb = 1;
  for(var i=3;i<=num;i++){
    result = numa + numb;
    numa = numb;
    numb = result;
    if(result<=num){
      fibs.push(result);
    }
  }
  console.log(fibs);
  var oddFibs = fibs.filter(function (item) {
    return item%2===1;
  });
  console.log(oddFibs);
  var sumOddFibs = oddFibs.reduce(function (p1, p2) {
    return p1+p2;
  },0);
  return sumOddFibs;
}

console.log(sumFibs(4));