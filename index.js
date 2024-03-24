// task 1
let i = 1;
while (i < 10) {
  console.log(i);
  i += 1;
}
// task 2
for (let j = 1; j < 20; j += 1) {
  if (j % 2 !== 0) {
    continue;
  }
  console.log("Парні числа: ", j);
}
// task 3
for (let k = 0; k < 71; k += 7) {
  console.log(k);
}
console.log("---------------");
// АБО
for (let k1 = 1; k1 <= 10; k1 += 1) {
  let result = 7 * k1;
  console.log("7 * " + k1 + " = " + result);
}

// task 6
for (let n = 0; n < 100; n += 1) {
  if (n >= 20) {
    break;
  }
  console.log(n);
}
// task 7
let number = 1;
while (number < 20) {
  if (number % 3 === 0) {
    number += 1;
    continue;
  }

  console.log(number);
  number += 1;
}
