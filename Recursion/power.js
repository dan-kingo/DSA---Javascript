/**
Problem: 
Write a function power(base, exponent) that takes a base and an exponent as arguments and recursively calculates the value of base raised to the power of exponent.

Test Cases:
power(2, 0); // 1 (2^0 = 1)
power(2, 2); // 4 (2^2 = 4)
power(2, 4); // 16 (2^4 = 16)
power(5, 3); // 125 (5^3 = 125)
power(7, 1); // 7 (7^1 = 7)
*/

// Method 1: iteration
const power = (base, exponent) => {
  if (exponent === 0) return 1;

  let power = 1;
  for (i = 0; i < exponent; i++) {
    power *= base;
  }
  return power;
};

// Method 2: recursion

const pow = (base, exponent) => {
  if (exponent === 0) return 1;

  return base * pow(base, exponent - 1);
};
