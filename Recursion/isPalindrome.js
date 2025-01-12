/**
Problem:
Write a recursive function isPalindrome(str) that takes a string as input and returns true if the string is a palindrome (reads the same forwards and backward), otherwise returns false.

Test Cases:
isPalindrome("awesome"); // false
isPalindrome("foobar"); // false
isPalindrome("tacocat"); // true
isPalindrome("amanaplanacanalpanama"); // true
isPalindrome("a"); // true
isPalindrome(""); // true
*/

// Method 1: iteration
const isPalindrome = (str) => {
  if (str === "") return true;

  let reverse = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }
  return str === reverse;
};

// Method 2: Recursion
const palindrome = (str) => {
  if (str.length === 1) return true;
  if (str.length === 2) return str[0] === str[1];

  if (str[0] === str[str.length - 1]) return isPalindrome(str.slice(1, -1));

  return false;
};
