/**
Problem:
Write a function productOfArray(arr) that takes an array of numbers as input and returns the product of all the numbers in the array

Test Cases:
productOfArray([1, 2, 3]); // 6 (1 * 2 * 3)
productOfArray([1, 2, 3, 10]); // 60 (1 * 2 * 3 * 10)
productOfArray([3, 5, 2]); // 30 (3 * 5 * 2)
productOfArray([2, 4, 6]); // 48 (2 * 4 * 6)
productOfArray([])); // 1 (empty array returns 1)

*/

// Method 1: iteration

const productOfArray = (arr) => {
  if (arr.length === 0) return 1;

  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    product *= arr[i];
  }
  return product;
};

// Method 2: Recursion

const productArray = (arr) => {
  if (arr.length === 0) return 1;

  return arr[0] * productArray(arr.slice(1));
};
