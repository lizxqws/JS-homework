// task 1
const age = 14;
console.log("Мій вік:", age);
// task 2
const myName = "Єлизавета";
console.log("Моє ім´я:", myName);
// task 3
const isStudent = false;
console.log("Чи ви є студентом:", isStudent);
// task 4
const myString = "No risk, no story";
console.log("Моя улюблена цитата:", myString);
// task 5
let myNumber = 87;
myNumber = 87 + 10;
console.log("Сума двох чисел:", myNumber);
// task 6
const myNull = null;
console.log("Значення null:", myNull);

// task 7

let yourName = prompt("Введіть ваше ім´я:");
alert("Привіт " + yourName + "!");

// task 8

let isConfirm = confirm("Підтвердити дію?");
if (isConfirm) {
  alert("Дякую за підтвердження!");
} else {
  alert("Дію відмінено!");
}

// task 9

alert("Ця дія може бути небезпечною!");
let isConfirmAction = confirm("Підтвердити Вашу дію?");
if (isConfirmAction) {
  alert("Дякую за підтвердження!");
} else {
  alert("Дію відмінено!");
}
