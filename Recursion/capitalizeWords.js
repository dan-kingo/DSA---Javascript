/**
Problem:
Write a function capitalizeWords(array) that takes an array of strings and returns a new array where each word is fully capitalized. 

Test Cases:
capitalizeWords(['i', 'am', 'learning', 'recursion']); 
// ["I", "AM", "LEARNING", "RECURSION"]
*/

// Method 1: itertion

const capitalizeWords = (arr) => {
  let uppercaseArr = [];
  for (str of arr) {
    uppercaseArr.push(str.toUpperCase());
  }
  return uppercaseArr;
};

// Method 2: Recursion
const capitalizeWord = (arr) => {
  if (arr.length === 0) return [];

  return [arr[0].toUpperCase()].concat(capitalizeWord(arr.slice(1)));
};
