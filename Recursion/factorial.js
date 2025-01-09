/*
Problem:
Write a function factorial(num) that accepts a positive integer num and returns the factorial of the number.

Test Cases 1: 
console.log(factorial(1)); // 1 (1)
console.log(factorial(2)); // 2 (2 * 1)
console.log(factorial(4)); // 24 (4 * 3 * 2 * 1)
console.log(factorial(5)); // 120 (5 * 4 * 3 * 2 * 1)
console.log(factorial(0)); // 1
*/

// Method 1: iterative approach

const factorial = (num) => {
  // check if it is non-zero
  if (num < 0) {
    console.log("pls enter +ve number!");
    return;
  }

  let fact = 1;
  for (i = num; i > 0; i--) {
    fact *= i;
  }
  return fact;
};

// Method 2: recursive approach

const fact = (num) => {
  if (num < 0) {
    console.log("pls enter +ve number!");
    return;
  } else if (num === 0) return 1;
  return num * fact(num - 1);
};
