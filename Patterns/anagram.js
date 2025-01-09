/*
Problem : Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman

Test Case: 
validAnagram('', '') // true
validAnagram('aaz', 'zza') // false
validAnagram('anagram', 'nagaram') // true
validAnagram("rat","car") // false) 
validAnagram('awesome', 'awesom') // false
validAnagram('qwerty', 'qeywrt') // true
validAnagram('texttwisttime', 'timetwisttext') // true
*/

// method 1
const validAnagram = (str1, str2) => {
  // check their length
  if (str1.length !== str2.length) return false;

  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  let frqStr1 = {};
  let frqStr2 = {};

  for (let val of str1) {
    frqStr1[val] = (frqStr1[val] || 0) + 1;
  }
  for (let val of str2) {
    frqStr2[val] = (frqStr2[val] || 0) + 1;
  }

  for (let key in frqStr1) {
    if (frqStr1[key] !== frqStr2[key]) return false;
  }

  return true;
};

// method 2
const isAnagram = (str1, str2) => {
  if (str1.length !== str2.length) return false;

  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  let frequencyCounter = {};

  for (let char of str1) {
    frequencyCounter[char] = (frequencyCounter[char] || 0) + 1;
  }

  for (let char of str2) {
    if (!frequencyCounter[char]) return false;
    frequencyCounter[char] -= 1;
  }

  return true;
};
