// task 1

const items = document.querySelectorAll(".item");
console.log(`У списку ${items.length} категорії.`);

for (let item of items) {
  console.log(`Категорія: ${item.firstElementChild.textContent}`);
  console.log(`Кількість елементів: ${item.lastElementChild.children.length}`);
}

// Напиши скрипт, який виконає наступні операції.

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Вийде 'У списку 3 категорії.'.

// Для кожного елемента li.item в списку ul#categories,
// знайде і виведе в консоль текст заголовка елемента(тега h2) і кількість елементів
// в категорії(всіх вкладених в нього елементів li).

// Наприклад, для першої категорії вийде:

// Категорія: Тварини
// Кількість елементів: 4
