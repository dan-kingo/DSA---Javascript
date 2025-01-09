/*
Problem:
Write a function countdown(num) that accepts a positive integer num as a parameter and logs numbers from num to 0. Once the countdown is complete, the function should log "All Done!".

Test Cases:
countdown(5);
Output: 5 4 3 2 1 0 "All Done!"

countdown(0); 
Output: 0 "All Done!"

*/

// Method 1 : iterative approach

const countDown = (num) => {
  // check if num >= 0
  if (num < 0) {
    console.log("Please enter a positive number");
    return;
  }
  for (i = num; i >= 0; i--) {
    console.log(i);
  }
  console.log("All Done!");
};
