var Person = function(firstAndLast) {
  var nameArray = firstAndLast.split(' ');
  var first = nameArray[0];
  var last = nameArray[1];
  var fullName = first + last;
  this.getFirstName = function () {
    return first;
  };
  this.getLastName = function () {
    return last;
  };
  this.getFullName = function () {
    return first + ' ' + last;
  };
  this.setFirstName = function (firstName) {
    first = firstName;
  };
  this.setLastName = function (lastName) {
    last = lastName;
  };
  this.setFullName = function (fullName) {
    var fullNameArr = fullName.split(' ');
    first = fullNameArr[0];
    last = fullNameArr[1];
    fullName = first + ' ' + last;
  };
};

var bob = new Person('Bob Ross');
console.log(bob.getFullName());
console.log(Object.keys(bob).length);