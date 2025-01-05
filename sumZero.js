/*
Problem : Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist

Test cases:
sumZero([-3,-2,-1,0,1,2,3]) // [-3,3] 
sumZero([-2,0,1,3]) // undefined
sumZero([1,2,3]) // undefined
*/

// method 1 : using nested loop Big O -> O(n^2)
const sumZero = (arr) => {
  // sort the array incase if not
  arr.sort((a, b) => a - b);

  // iterate over the array
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
};

console.log(sumZero([5, 2, 8, -3, -4, -2, 0, 3]));

// method 2 : using multiple pointers Big O -> O(n)
const theirSumZero = (arr) => {
  // first sort it incase if not
  arr.sort((a, b) => a - b);

  let left = 0;
  let right = arr.length - 1;

  // iterate and check
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
};
console.log(theirSumZero([5, 2, 8, -3, -4, 0]));
