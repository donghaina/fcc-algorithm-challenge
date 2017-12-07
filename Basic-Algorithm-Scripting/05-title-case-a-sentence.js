function titleCase(str) {
  var arr = str.split(' ');
  var newArr = [];
  arr.forEach(function(item){
    newArr.push(item.substr(0,1).toUpperCase() + item.substr(1).toLowerCase());
  });
  return newArr.join(' ');
}

titleCase("I'm a little tea pot");