/**
Problem:
Write a function collectStrings(obj) that takes an object and returns an array of all the string values contained in the object, including strings in nested objects. 

Test Cases:
const obj2 = {
  a: "hello",
  b: { b1: "world", b2: { b3: "recursion" } },
  c: "is fun"
};

collectStrings(obj2); 
// ["hello", "world", "recursion", "is fun"]
*/

// Method 1: pure recursion
const collectStrings = (obj) => {
  let arrayOfString = [];

  for (let key in obj) {
    if (typeof obj[key] === "string") arrayOfString.push(obj[key]);
    else if (typeof obj[key] === "object") {
      arrayOfString = arrayOfString.concat(collectStrings(obj[key]));
    }
  }

  return arrayOfString;
};
