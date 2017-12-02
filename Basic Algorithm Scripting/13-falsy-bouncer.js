function bouncer(arr) {
  // 请把你的代码写在这里
  return arr.filter(function (item) {
    return Boolean(item);
  });
}
bouncer([7, "ate", "", false, 9]);

