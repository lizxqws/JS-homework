const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

// const liElements = [];

let ul = document.getElementById("gallery");

let result = "";

for (const elem of images) {
  // let li = document.createElement("li");
  // let img = document.createElement("img");
  // img.setAttribute("src", elem.url);
  // img.setAttribute("alt", elem.alt);
  // li.append(img);
  // liElements.push(li);
  const img = `<li class="gallery__element">
        <img 
          src= "${elem.url}"
          alt= "${elem.alt}"
        />
      </li>`;

  result += img;
}
console.log(result);

ul.insertAdjacentHTML("afterbegin", result);

// Напиши скрипт для створення галереї зображень по масиву даних.

// Використовуй масив об'єктів
// images для створення тегів img вкладених в li.
// Для створення розмітки використовуй шаблонні рядки і insertAdjacentHTML().

// Всі елементи галереї повинні додаватися в
// DOM за одну операцію вставки.
// Додай мінімальне оформлення галереї
// флексбоксами або грід через css - класи.
