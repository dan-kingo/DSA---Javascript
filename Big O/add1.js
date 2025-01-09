// create a function thst sum a number from 1 -> N

// func 1

const add1 = (limit) => {
  let total = 0;
  for (i = 0; i <= limit; i++) {
    total += i;
  }

  return total;
};

let t1 = performance.now();
console.log(`Sum of number from 1 -> limit is ${add1(1000000)} `);
let t2 = performance.now();

console.log(`Expected Time: ${(t2 - t1) / 1000}`);
