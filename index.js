// task 1

const greet = () => console.log("Hello World!");
greet();

// task 2

const input = Number(prompt("Вгадай число: "));
const number = Math.round(Math.random() * 100) + 1;

const checkNumber = (input, number) => {
  if (input == number) {
    console.log("Ви ввели правельне число");
  } else {
    console.log("Ви ввели неправельне число");
  }
};

checkNumber(input, number);

// task 4

const applyCallbackToEachElement = (arr, callback) => {
  const squareArray = [];
  for (let i = 0; i < arr.length; i++) {
    squareArray.push(callback(arr[i]));
  }
  return squareArray;
};

const arr = [1, 2, 3, 4, 5];

const squareCallback = number => {
  return Math.pow(number, 2);
};

const result = applyCallbackToEachElement(arr, squareCallback);
console.log(result);

// task 5

const calculateDiscountedPrice = (price, discount, callback) => {
  return callback(price - (price * discount) / 100);
};

const showDiscountedPrice = calculatedPrice => {
  return `Discounted price: ${calculatedPrice}`;
};

const price = 100;
const discount = 10;

console.log(calculateDiscountedPrice(price, discount, showDiscountedPrice));
