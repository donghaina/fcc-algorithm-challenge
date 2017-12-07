function every(collection, pre) {
  // Is everyone being true?
  var result = collection.every(function (item) {
    return Boolean(item[pre]);
  });
  return result;
}

console.log(every([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"));