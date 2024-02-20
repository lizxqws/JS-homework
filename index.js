// task 1
const celsius = 100;
const fahrenheit = (celsius * 9) / 5 + 32;
console.log("Температура у Фаренгейтах: " + fahrenheit + "°F");
// task 2
const numberOfDays = 30;
const amountOfHours = numberOfDays * 24;
const amountOfMinutes = numberOfDays * 1440;
console.log("Кількість годин у місяці: " + amountOfHours);
console.log("Кількість хвилин у місяці: " + amountOfMinutes);
// task 3
const playerHealth = 100;
const playerEnergy = 100;
const playerHealthDecrease = playerHealth - 45;
const playerEnergyDecrease = playerEnergy - 73;
console.log("Зниженне здоров'я гравця: " + playerHealthDecrease);
console.log("Зниженна енергія гравця: " + playerEnergyDecrease);
// task 4
const storePurchaseAmount = 80800;
const storeDiscount = storePurchaseAmount - (storePurchaseAmount * 10) / 100;
console.log("Сума у корзині: " + storePurchaseAmount + " гривень");
console.log("Сума у корзині зі знижкою: " + storeDiscount + " гривень");
// task 5
const floatingNumber = 2.4;
console.log("Завдання 5: " + Math.floor(floatingNumber));
// task 6
const numberWithComma = "123.341asdc";
console.log("Число з плаваючою комою: " + Number.parseFloat(numberWithComma));
// task 7
const integerNumber = "705px";
console.log("Ціле число: " + Number.parseInt(integerNumber));
// task 8
const rootOfNumber = 25;
console.log("Корінь числа: " + Math.sqrt(rootOfNumber));
// task 9
const firstIntegerNumber = 432;
const secondStringNumber = "313";
console.log("Ціле(рядкове) число: " + Number.parseInt(secondStringNumber));
console.log("Рядкове(ціле) число: " + firstIntegerNumber.toString());
