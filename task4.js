// task 4
const span = document.querySelector("#value");
let counterValue = Number.parseInt(span.textContent);

const increment = () => {
  counterValue += 1;
  span.textContent = counterValue;
};
const incrementButton = document.querySelector(
  "button[data-action='increment']"
);
incrementButton.addEventListener("click", increment);

const decrement = () => {
  counterValue -= 1;
  span.textContent = counterValue;
};
const decrementButton = document.querySelector(
  "button[data-action='decrement']"
);
decrementButton.addEventListener("click", decrement);

// Лічильник складається зі спана і кнопок,
//  які повинні збільшувати і зменшувати значення лічильника на 1.

// // Створи змінну counterValue в якій
// буде зберігається поточне значення   лічильника.
// // Створи функції increment і decrement для
// збільшення і зменшення значення   лічильника.
// Додай слухачі кліків на кнопки, виклики функцій та оновлення інтерфейсу
