// task 1
const friends = ["Mango", "Poly", "Kiwi", "Ajax"];
let stringResult = "";
for (let i = 0; i < friends.length; i++) {
  stringResult += friends[i];
  if (i !== friends.length - 1) {
    stringResult += ", ";
  }
}
console.log(stringResult);

let string = ", ";
console.log(friends.join(string));

// task 2
const cards = [
  "Карточка-1",
  "Карточка-2",
  "Карточка-3",
  "Карточка-4",
  "Карточка-5",
];
// task 3
const cardToRemove = cards.splice(2, 1);
// const cardToRemove = cards.splice(cards.indexOf("Карточка-3"), 1);
console.log(cards.join(", "));
// task 4
const cardToInsert = cards.splice(4, 0, "Карточка-6");
console.log(cards.join(", "));
// task 5
const cardToUpdate = cards.splice(2, 1, "Привіт");
console.log(cards.join(", "));
