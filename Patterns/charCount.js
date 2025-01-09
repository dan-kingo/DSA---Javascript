// working with char counter program

/*
Problem: write afunction that counts each characters 
    in the given string to become more specific only 
    alphanumeric characters
*/

const charCount = (str) => {
  // make an object to store char - count pair
  let charList = {};
  str = str.toLowerCase();
  /* loop over the string
        -> check weather it is alphanumeric or not
        -> if it's alphanumeric & !found in the object make count = 1
        -> else make count++ 
    */
  for (let char of str) {
    if (isAlphaNumeric(char)) {
      charList[char] = charList[char]++ || 1;
    }
  }
  // return object

  return charList;
};

console.log(charCount("Helow Daiwr1003!#"));

function isAlphaNumeric(char) {
  let code = char.charCodeAt(0);
  if (!(code > 47 && code < 58) && !(code > 96 && code < 123)) return false;
  return true;
}
