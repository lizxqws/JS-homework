// task 2

const ingredients = [
  "Картопля",
  "Гриби",
  "Часник",
  "Помідори",
  "Зелень",
  "Приправи",
];

const liElements = [];

const ul = document.querySelector("#ingredients");

for (const elem of ingredients) {
  let li = document.createElement("li");
  li.textContent = elem;
  liElements.push(li);
}

ul.append(...liElements);

// Напиши скрипт, який для кожного елемента масиву
// ingredients створить окремий li, після чого вставить
// всі li за одну операцію в список ul.ingredients.
// Для створення DOM - вузлів використовуй document.createElement().
