// task 1

const clients = ["Mango", "Poly", "Ajax"];
const logItems = function (items) {
  for (let i = 0; i < items.length; i++) {
    console.log(i + 1 + " - " + items[i]);
  }
};

logItems(clients);

// task 2

const calculateEngravingPrice = function (message, pricePerWord) {
  const words = message.split(" ");
  const sum = words.length * Number(pricePerWord);
  console.log(sum);
};
calculateEngravingPrice("Hello World and people!", 100);

// task 3

const findLongestWord = function (text) {
  const words = text.split(" ");
  let longestWord = "";
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }
  console.log(longestWord);
};

findLongestWord("Hello! My name is Oleksandra");

// task 4

const formatString = function (message) {
  if (message.length > 40) {
    message = message.slice(0, 40) + "...";
  }
  console.log(message);
};
formatString("Hello! Today I want to tell you about some incredible places");

// task 5

const checkForSpam = function (message) {
  const lcMessage = message.toLowerCase().split(" ");

  if (lcMessage.includes("spam") || lcMessage.includes("sale")) {
    return true;
  }

  return false;
};

console.log(checkForSpam("Hi sale"));

// task 6

let input;
const numbers = [];
let total = 0;

const countSum = function (elements) {
  let sum = 0;

  for (const item of numbers) {
    sum += Number(item);
  }

  return sum;
};

do {
  input = prompt("Введи число:");
  if (!isNaN(input)) {
    numbers.push(input);
  } else {
    alert("Було введено не число, попробуйте ще раз");
  }
} while (input);

total = countSum(numbers);
console.log(`Загальна сума чисел дорівнює ${total}`);

// task 7

const logins = [];

const isLoginValid = function (login) {
  if (login.length > 4 && login.length <= 16) {
    return true;
  }
  return false;
};

const isLoginUnique = function (allLogins, login) {
  for (let item of allLogins) {
    if (item == login) {
      return false;
    }
  }
  return true;
};

const addLogin = function (allLogins1, login1) {
  if (isLoginValid(login1)) {
    if (isLoginUnique(allLogins1, login1)) {
      logins.push(login1);
      return "Логін успішно доданий!";
    } else {
      return "Такий логін уже використовується!";
    }
  } else {
    return "Помилка! Логін повинен бути від 4 до 16 символів";
  }
};

do {
  input = prompt("Введи логін:");
  if (input == null) {
    break;
  }
  console.log(addLogin(logins, input));
} while (input);
console.log(logins);
