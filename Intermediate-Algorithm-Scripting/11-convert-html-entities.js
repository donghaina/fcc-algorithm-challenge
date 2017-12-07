function convert(str) {
  var entitiesMap = {
    '&': '&​amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&​quot;',
    '\'': '&​apos;'
  };
  var strArr = str.split('');
  for(prop in entitiesMap){
    // newStr = str.replace(prop,entitiesMap[prop])
    strArr.forEach(function (item,index,array) {
      if(item===prop){
        array[index] = entitiesMap[prop];
      }
    })
  }
  return strArr.join('');
}

console.log(convert("Dolce & Gabbana"));