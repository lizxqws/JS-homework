// task 1
const button = document.querySelector("#btn");
const text = document.querySelector("#text");

button.textContent = text.value;
// task 2
const catImg = document.querySelector("#catImage");

catImg.src = "./images/cat2.jpg";
// task 3
const link = document.querySelector("a");
const dogImg = document.querySelector("#dogImage");

link.href = "https://m.youtube.com/?hl=uk";
dogImg.alt = "dog";
// task 4
const list = document.querySelector("ul");

list.firstElementChild.textContent = "hello";
