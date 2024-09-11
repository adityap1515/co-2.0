/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let great = numbers[0]; 
    for (let num of numbers) {
        if (num > great) {
            great = num;
        }
    }
    
    return great;
}

module.exports = findLargestElement;