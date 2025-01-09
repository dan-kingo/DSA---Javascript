// func3 -> recursion
// it will cause Range error issue since the input grows
function add3(limit) {
  if (limit <= 1) return limit;
  else return limit + add3(limit - 1);
}

let t1 = performance.now();
let result = add3(10000);
console.log(`Sum of number from 1 -> limit is ${result} `);
let t2 = performance.now();

console.log(`Expected Time: ${(t2 - t1) / 1000}`);
