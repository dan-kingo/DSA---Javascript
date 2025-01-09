/*
 Problem:
 Write a function collectOddValues(arr) that takes an array of integers and returns a new array containing all the odd numbers from the input array.

 Test Cases:
collectOddValues([1, 2, 3, 4, 5]); // [1, 3, 5]
collectOddValues([4, 6, 8, 10]); // []
collectOddValues([1, 3, 5, 7, 9]); // [1, 3, 5, 7, 9]
collectOddValues([]); // []
collectOddValues([12, 15, 20, 25]); // [15, 25]

*/

// method 1: pure recursion

const collectOddValues = (arr) => {
  let result = [];
  // check if its length is 0
  if (arr.length === 0) return [];
  if (arr[0] % 2 !== 0) result.push(arr[0]);

  return result.concat(collectOddValues(arr.slice(1)));
};

// Method 2: helper function recursion

const collectOdds = (arr) => {
  let result = [];
  const helper = (helperArray) => {
    if (helperArray.length === 0) return [];
    if (helperArray[0] % 2 !== 0) result.push(helperArray[0]);
    helper(helperArray.slice(1));
  };
  helper(arr);
  return result;
};
