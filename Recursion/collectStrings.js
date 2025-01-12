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
  let arrayOfStrings = [];

  for (let key in obj) {
    if (typeof obj[key] === "string") arrayOfStrings.push(obj[key]);
    else if (typeof obj[key] === "object") {
      arrayOfStrings = arrayOfStrings.concat(collectStrings(obj[key]));
    }
  }

  return arrayOfStrings;
};

// Method 2: helper function
const collectString = (object) => {
  var arrayOfStrings = [];

  function helper(obj) {
    for (var key in obj) {
      if (typeof obj[key] === "string") {
        arrayOfStrings.push(obj[key]);
      } else if (typeof obj[key] === "object") {
        return helper(obj[key]);
      }
    }
  }

  helper(object);

  return arrayOfStrings;
};
