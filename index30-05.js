"use strict";

const animal = {
  legs: 4,
};
//*Як я зрозумів  , привʼязка нового обʼєкта , до старого
//*успадкування
const dog = Object.create(animal);

dog.name = "barsik";
console.log(dog);

//*Перевірка на прототив(наслідування) | true
console.log(animal.isPrototypeOf(dog));

//*Можно знаходити інформацію в привʼязоному обʼєкті | 4
console.log(dog.legs);

//* hasOwnProperty - шукає значення , чи шось типу того  ,
//* в контрекретному обʼєкті
console.log(dog.hasOwnProperty("legs"));
console.log(animal.hasOwnProperty("legs"));

//! Стровення класа
//* З великої літери
class User {
  constructor(name, email) {
    //* Ініцілюзували властивості класу *_*
    //* this - для нового обʼєкта , тоб-то , в 'constructor' створюється новий obj
    this.name = name;
    this.email = email;
  }
}

//*Будуть такі же самі властивості , теж obj  , копія класу
const andy = new User("andy", "andy@gmail.com");
console.log(andy);

const ilon = new User("ilon", "ilon@gmail.com");
console.log(ilon);

//! хз , не працює
class User1 {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  getEmail() {
    return this.email;
  }
  changeEmail(newEmail) {
    this.email = newEmail;
  }
}
const andy1 = new User1({
  name: "andy",
  email: "andy@gmail.com",
});
console.log(andy1);

//* Задача - створити клас , який буде отримувати імʼя та призвище
//* з можливістю виводити імʼя та призвище  разом
class Person {
  constructor(first, last) {
    this.first = first;
    this.last = last;
  }
  getUserName() {
    return `${this.first} ${this.last}`;
  }
}
const person1 = new Person("Jakov", "Horik");
console.log(person1.getUserName());

class User2 {
  //*public
  name;
  //*privat
  #email;
  //* privat - дозволяє змінювати тільки в середині класу
  constructor({ name, email }) {
    this.name = name;
    this.#email = email;
  }
  getEmail() {
    return this.#email;
  }
}
