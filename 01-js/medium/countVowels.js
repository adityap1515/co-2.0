/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    let vowelCount = 0;
    let ele;
    let i;
    str = str.toLowerCase()
    for(i = 0; i<str.length; i++ ){
      ele = str[i];
      if(ele == 'a' || ele == 'e' || ele == 'i' || ele == 'o' || ele == 'u'){
        vowelCount++;
      }
    }
    return vowelCount;
}

module.exports = countVowels;