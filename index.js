// // task 1
const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true,
};

const { name, age, hobby, premium } = user;

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

const employees = {
  ann: 29,
  david: 35,
  helen: 1,
  lorence: 99,
};

console.log(findBestEmployee(employees));

const { ann, david, helen, lorence } = employees;
// console.log(ann, david, helen, lorence);

// task 4

const countTotalSalary = function (employees) {
  let total = 0;

  for (let salary of Object.values(employees)) {
    total += salary;
  }
  return total;
};

console.log(countTotalSalary({})); // 0

const totalSalary = {
  mango: 100,
  poly: 150,
  alfred: 80,
};

console.log(countTotalSalary(totalSalary));

const { mango, poly, alfred } = totalSalary;
// console.log(mango, poly, alfred);

// task 5

const products = [
  { productName: "Радар", price: 1300, quantity: 4 },
  { productName: "Сканер", price: 2700, quantity: 3 },
  { productName: "Дроид", price: 400, quantity: 7 },
  { productName: "Захват", price: 1200, quantity: 2 },
];

// const [obj1 = { productName, price, quantity }, obj2, obj3, obj4] = products;

const getAllPropValues = function (arr, prop) {
  let propValues = [];

  for (let elem of arr) {
    if (elem[prop] !== undefined) {
      propValues.push(elem[prop]);
    }
  }

  return propValues;
};

console.log(getAllPropValues(products, "productName")); // ['Радар', 'Сканер', 'Дроид', 'Захват']

console.log(getAllPropValues(products, "quantity")); // [4, 3, 7, 2]

console.log(getAllPropValues(products, "category")); // []

// task 6

const calculateTotalPrice = function (allProdcuts, productName) {
  for (let product of allProdcuts) {
    if (product.productName == productName) {
      return product.price * product.quantity;
    }
  }
};

console.log(calculateTotalPrice(products, "Радар")); // 5200

console.log(calculateTotalPrice(products, "Дроид")); // 2800

// task 7

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
    let transaction = {
      id: this.transactions.length + 1,
      type: type,
      amount: amount,
    };

    return transaction;
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */

  deposit(amount) {
    this.balance += amount;

    const newTransaction = this.createTransaction(amount, Transaction.DEPOSIT);

    this.transactions.push(newTransaction);
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    if (this.balance < amount) {
      console.log("Знаття такої суми неможливо, недостатньо коштів");
      return false;
    }

    this.balance -= amount;

    const newTransaction = this.createTransaction(amount, Transaction.WITHDRAW);

    this.transactions.push(newTransaction);
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return this.balance;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    for (let transaction of this.transactions) {
      if (transaction.id == id) {
        return transaction;
      }
    }

    return false;
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let totalAmount = 0;

    for (let transaction of this.transactions) {
      if (transaction.type == type) {
        totalAmount += transaction.amount;
      }
    }

    return totalAmount;
  },
};

account.deposit(100);
account.deposit(230);

account.withdraw(100);
account.withdraw(400);

console.log(account.getBalance());

console.log(account.getTransactionDetails(2));

console.log(account.getTransactionTotal(Transaction.DEPOSIT));

console.log(account.getTransactionTotal(Transaction.WITHDRAW));
