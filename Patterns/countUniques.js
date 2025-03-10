/*
Problems : Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

Test Cases: 
countUniqueValues([1,1,1,1,1,2]) // 2
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
countUniqueValues([]) // 0
countUniqueValues([-2,-1,-1,0,1]) // 4

*/

// method 1 : Big O => O(n^2)
const countUniques = (arr) => {
  // create a variable to store the unique values
  let arrCopy = [];
  for (val of arr) {
    if (arrCopy.indexOf(val) === -1) {
      arrCopy.push(val);
    }
  }

  return arrCopy.length;
};

// method 2 : Big O => O(n)

const countUniqueValues = (arr) => {
  // use Sets to get uniques from the array
  return new Set(arr).size;
};
