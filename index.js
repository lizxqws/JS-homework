// task 1
const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true,
};

user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;

const userKeys = Object.keys(user);

for (key of userKeys) {
  console.log(`${key}: ${user[key]}`);
}

// task 2

const countProps = function (obj) {
  const objKeys = Object.keys(obj);
  return objKeys.length;
};

console.log(countProps({})); // 0

console.log(countProps({ name: "Mango", age: 2 })); // 2

console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })); // 3

// task 3

const findBestEmployee = function (employees) {
  let max = 0;
  let bestEmployeeName = "";

  for (let employeeName of Object.keys(employees)) {
    if (employees[employeeName] > max) {
      max = employees[employeeName];
      bestEmployeeName = employeeName;
    }
  }

  return bestEmployeeName;
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  })
);

// task 4

const countTotalSalary = function (employees) {
  let total = 0;

  for (let salary of Object.values(employees)) {
    total += salary;
  }
  return total;
};

console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  })
); // 330

// task 5

const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 2 },
];

const getAllPropValues = function (arr, prop) {
  let propValues = [];

  for (let elem of arr) {
    if (elem[prop] !== undefined) {
      propValues.push(elem[prop]);
    }
  }

  return propValues;
};

console.log(getAllPropValues(products, "name")); // ['Радар', 'Сканер', 'Дроид', 'Захват']

console.log(getAllPropValues(products, "quantity")); // [4, 3, 7, 2]

console.log(getAllPropValues(products, "category")); // []

// task 6

// const products = [
//   { name: "Радар", price: 1300, quantity: 4 },
//   { name: "Сканер", price: 2700, quantity: 3 },
//   { name: "Дроид", price: 400, quantity: 7 },
//   { name: "Захват", price: 1200, quantity: 2 },
// ];

const calculateTotalPrice = function (allProdcuts, productName) {
  for (let product of allProdcuts) {
    if (product.name == productName) {
      return product.price * product.quantity;
    }
  }
};

console.log(calculateTotalPrice(products, "Радар")); // 5200

console.log(calculateTotalPrice(products, "Дроид")); // 2800
