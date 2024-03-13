// task 1
const text1 = prompt("Введіть значення 1");
const text2 = prompt("Введіть значення 2");
if (text1 && text2) {
  console.log(alert("Обидва поля заповнені"));
} else {
  console.log(alert("Не всі поля заповнені"));
}
// task 2
const value1 = prompt("Введіть значення 1");
const value2 = prompt("Введіть значення 2");
const sum = value1.length + value2.length;
if (sum > 10) {
  console.log(alert("Сума більша за 10"));
} else {
  console.log(alert("Сума менша або дорівнює 10"));
}
// task 3
const textValue = prompt("Введіть текстове значення");
if (textValue.includes("JavaScript")) {
  console.log(alert("Текст містить слово JavaScript"));
} else {
  console.log(alert("Текст не містить слово JavaScript"));
}
// task 4
const textValue2 = prompt("Введіть текстове значення");
if (textValue2 >= 10 && textValue2 < 20) {
  console.log(alert("Число входить в діапазон від 10 до 20"));
} else {
  console.log(alert("Число не входить в діапазон від 10 до 20"));
}
// task 5
const nickName = prompt("Введіть ім'я");
const email = prompt("Введіть email");
const password = prompt("Введіть пароль");
if (nickName.length >= 3 && email.includes("@.") && password.length >= 6) {
  console.log(alert("Коректно заповнені дані"));
} else {
  console.log(alert("Дані заповнені не коректно"));
}
