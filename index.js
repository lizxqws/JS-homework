// task 1
let value = prompt("Оберіть напій:  Кава - 1; Чай- 2; Сік - 3");
switch (value) {
  case "1":
    console.log = alert("Ви обрали каву");
    break;
  case "2":
    console.log = alert("Ви обрали чай");
    break;
  case "3":
    console.log = alert("Ви обрали сік");
    break;
  default:
    console.log = alert("Ви не обрали напій");
}
// task 2
let day = prompt("Введіть день тижня:");
switch (day) {
  case "Понеділок":
  case "Вівторок":
  case "Середа":
  case "Четвер":
  case "П'ятниця":
    console.log = alert("Це робочий день");
    break;
  case "Субота":
  case "Неділя":
    console.log = alert("Це вихідний день");
    break;
  default:
    console.log = alert("Ви не вписали день тижня");
}
// task 3
let season = prompt("Введіть номер місяця:");
switch (season) {
  case "12":
  case "1":
  case "2":
    console.log = alert("Це зима");
    break;
  case "3":
  case "4":
  case "5":
    console.log = alert("Це весна");
    break;
  case "6":
  case "7":
  case "8":
    console.log = alert("Це літо");
    break;
  case "9":
  case "10":
  case "11":
    console.log = alert("Це осінь");
    break;
  default:
    console.log = alert("Ви не вписали номер місяця");
}
// task 4
let month = prompt("Введіть номер місяця:");
switch (month) {
  case "2":
    console.log = alert("У цьому місяці 28 або 29 днів");
    break;
  case "4":
  case "6":
  case "9":
  case "11":
    console.log = alert("У цьому місяці 30 днів");
    break;
  case "1":
  case "3":
  case "5":
  case "7":
  case "8":
  case "10":
  case "12":
    console.log = alert("У цьому місяці 31 день");
    break;
  default:
    console.log = alert("Ви не вписали номер місяця");
}
// task 5
let color = prompt("Введіть колір:");
switch (color) {
  case "Червоний":
    console.log = alert("Стоп");
    break;
  case "Жовтий":
    console.log = alert("Чекати");
    break;
  case "Зелений":
    console.log = alert("Йти");
    break;
  default:
    console.log = alert("Ви не вписали потрібний колір");
}
// task 6
let number1 = Number(prompt("Введіть перше число:"));
let arithmetic = prompt("Введіть дію (+, -, *, / ):");
let number2 = Number(prompt("Введіть друге число (на нуль ділити не можна):"));
switch (arithmetic) {
  case "+":
    console.log = alert(number1 + number2);
    break;
  case "-":
    console.log = alert(number1 - number2);
    break;
  case "*":
    console.log = alert(number1 * number2);
    break;
  case "/":
    if (number2 == 0) {
      alert("На нуль ділити не можна");
    } else {
      console.log = alert(number1 / number2);
    }
    break;
  default:
    console.log = alert("Ви не вписали потрібне значення");
}
