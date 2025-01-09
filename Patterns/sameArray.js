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

// method 2 Big O -> O(N^2)

const sameArray = (array1, array2) => {
  // check their length first
  if (array1.length !== array2.length) {
    return false;
  }

  // loop through the first array
  for (let i = 0; i < array1.length; i++) {
    let correctIndex = array2.indexOf(array1[i] ** 2);
    if (correctIndex === -1) {
      return false;
    }
    // remove the founded element for frequency check
    array2.splice(correctIndex, 1);
  }
  return true;
};

// method 3 Big O -> O(N)
const isSame = (ar1, ar2) => {
  let frqCounter1 = {};
  let frqCounter2 = {};

  for (let val of ar1) {
    frqCounter1[val] = (frqCounter1[val] || 0) + 1;
  }
  for (let val of ar2) {
    frqCounter2[val] = (frqCounter2[val] || 0) + 1;
  }

  for (let key in frqCounter1) {
    //check if the square of the key is in the second array
    if (!(key ** 2 in frqCounter2)) return false;

    // check if their frequency are same
    if (frqCounter2[key ** 2] !== frqCounter1[key]) return false;
  }

  return true;
};
