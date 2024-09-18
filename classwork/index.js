// const hello1 = name1 => console.log(`Привіт, ${name1}`);
// hello1("Катря");

const sum = (n, m) => {
  if (n === NaN || n === undefined) {
    console.log("Ви ввели не число");
  } else {
    return n + m;
  }
};
console.log(sum("w", 2));
