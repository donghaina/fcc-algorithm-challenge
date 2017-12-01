function palindrome(str) {
    var newStr = str.replace(/[^A-Za-z0-9]/g,'').toLowerCase();
    var reversedStr = newStr.split('').reverse().join('');
    return newStr === reversedStr;
}

palindrome("eye");
