function rot13(str) { // LBH QVQ VG!
  var rot13Map = {
    'A': 'N',
    'B': 'O',
    'C': 'P',
    'D': 'Q',
    'E': 'R',
    'F': 'S',
    'G': 'T',
    'H': 'U',
    'I': 'V',
    'J': 'W',
    'K': 'X',
    'L': 'Y',
    'M': 'Z',
    'N': 'A',
    'O': 'B',
    'P': 'C',
    'Q': 'D',
    'R': 'E',
    'S': 'F',
    'T': 'G',
    'U': 'H',
    'V': 'I',
    'W': 'J',
    'X': 'K',
    'Y': 'L',
    'Z': 'M'
  };
  var strArr = str.split('');
  var regx = /[A-Z]/;
  strArr.forEach(function (item, index, array) {
    if (regx.test(item)) {
      array[index] = rot13Map[item];
    }
  });
  return strArr.join('');
}

rot13("SERR PBQR PNZC");  // 你可以修改这一行来测试你的代码