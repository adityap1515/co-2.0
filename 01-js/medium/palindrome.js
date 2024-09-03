/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let rev = "";
  let h = false;
  str = str.toLowerCase();
  str = str.replace(/[^a-zA-Z0-9]/g, '');

  for(let i = str.length-1; i>=0; i--){
    rev += str[i];
  }
  if(str === rev){
    h = true;
  }
  return h;
}

module.exports = isPalindrome;
