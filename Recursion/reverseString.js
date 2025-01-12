/**
Problem:
Write a recursive function reverse(str) that takes a string as input and returns the string reversed.

Test Cases:
reverse("awesome"); // "emosewa"
reverse("rithmschool"); // "loohcsmhtir"
reverse("a"); // "a"
reverse(""); // ""
reverse("recursion"); // "noisrucer"
*/

// Method 1: iteration
const reverse = (str) => {
  if (str.length === 0) return "";

  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
};
