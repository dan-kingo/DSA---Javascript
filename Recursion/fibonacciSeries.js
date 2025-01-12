/**
Problem:
Write a function fib(n) that takes an integer n as input and returns the n-th number in the Fibonacci sequence. The Fibonacci sequence starts as 1, 1, 2, 3, 5, 8, ..., where each number is the sum of the two preceding numbers.

Test Cases:
fib(1); // 1 
fib(2); // 1 
fib(3); // 2 
fib(4); // 3 
fib(5); // 5
fib(6); // 8
fib(7); // 13
*/

// Method 1: iteration

const fib = (num) => {
  if (num === 1 || num === 2) return 1;

  let result = 0,
    first = 1,
    second = 1;
  for (let i = 3; i <= num; i++) {
    result = first + second;
    first = second;
    second = result;
  }

  return result;
};
