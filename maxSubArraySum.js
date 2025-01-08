/*
Problem : Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.

Test Cases:
maxSubarraySum([1,2,5,2,8,1,5],2) // 10
maxSubarraySum([1,2,5,2,8,1,5],4) // 17
maxSubarraySum([4,2,1,6],1) // 6
maxSubarraySum([4,2,1,6,2],4) // 13
maxSubarraySum([],4) // null
 */

// Method 1 : Big O -> O(n^2)
const maxSubarraySum = (arr, num) => {
  if (num > arr.length) {
    return null;
  }
  var max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++) {
    temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
};

// Method 2 : Big O -> O(n)
const maxSubArraySum = (arr, num) => {
  if (num > arr.length) {
    return null;
  }

  let max = 0;
  let temp = 0;

  // Calculate the sum of the first subarray of size `num`
  for (let i = 0; i < num; i++) {
    max += arr[i];
  }

  temp = max;

  // Slide the window through the array
  for (let i = num; i < arr.length; i++) {
    // Adjust the sum by removing the first element of the previous window and adding the new element
    temp = temp - arr[i - num] + arr[i];
    // Update max
    max = Math.max(max, temp);
  }

  return max;
};
