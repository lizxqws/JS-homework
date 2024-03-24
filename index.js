// task 1
let numbers = [1, 2, 3];
numbers[1] = 10;
console.log(numbers);

// task 2
let str = ["Марія", "Анна", "Катря"];
str[3] = "Соломія";
console.log(str);

// task 3
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let sum = 0;
for (let i = 0; i < numbers.length; i += 1) {
  sum += numbers[i];
}
console.log("Сума всіх чисел: " + sum);

// task 4
numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i += 1) {
  console.log("Число: ", numbers[i]);
}

// task 5
str = ["Собака", "Кіт", "Вовк", "Черепаха", "Крокодил"];
for (let i = 0; i < str.length; i += 1) {
  if (str[i].length < 5) {
    continue;
  }
  console.log("Слово яке має більше 5 символів:", str[i]);
}

// task 6
numbers = [1, 13, 123, 14, 34, 53, 785, 324, 3, 10];
max = 0;
for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
}
console.log("Максимальне число:", max);

// task 7
numbers = [12, 22, 14, 23, 15, 65, 13, 11, 10, 2];
for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] % 2 === 0) {
    console.log("Парні числа:", numbers[i]);
  }
}
