/*
Problem : Write a function called same, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.

Test Cases: 
same([1,2,3], [4,1,9]) // true
same([1,2,3], [1,9]) // false
same([1,2,1], [4,4,1]) // false (must be same frequency)
*/

// method 1 Big O -> O(N^2)
const same = (arr1, arr2) => {
  const arr2Copy = [...arr2];
  // must have same length
  if (arr1.length !== arr2.length) {
    return false;
  }
  // check if arr1 is equal to square of arr2

  for (let i = 0; i < arr1.length; i++) {
    let foundedIndex = -1;

    for (let j = 0; j < arr2.length; j++) {
      if (arr2Copy[j] === Math.pow(arr1[i], 2)) {
        foundedIndex = j;
        break;
      }
    }
    if (foundedIndex === -1) {
      return false;
    }

    // must have similar frequency
    arr2Copy.splice(foundedIndex, 1);
  }
  return true;
};
