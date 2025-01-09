// func 2

const add2 = (limit) => {
  return (limit * (limit + 1)) / 2;
};

let t1 = performance.now();
console.log(`Sum of number from 1 -> limit is ${add2(1000000)} `);
let t2 = performance.now();

console.log(`Expected Time: ${(t2 - t1) / 1000}`);
