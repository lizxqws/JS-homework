// task 1

const bankAccount = {
  ownerName: "",
  accountNumber: "",
  balance: 0,
  deposit(amount) {
    this.balance += amount;
  },
  withdraw(amount) {
    if (this.balance > 0) {
      return (this.balance -= amount);
    }
    return false;
  },
};

console.log(bankAccount.balance);

bankAccount.deposit(100);

console.log(bankAccount.balance);

bankAccount.withdraw(50);

console.log(bankAccount.balance);

// task 2

const weather = {
  temperature: 0,
  humidity: "",
  windSpeed: "",
  isTemperatureNegative() {
    return this.temperature <= 0;
  },
};

weather.temperature = prompt("Введіть температуру: ");
if (weather.isTemperatureNegative()) {
  console.log("Температура нижче або дорівнює 0 градусів Цельсія");
} else {
  console.log("Температура вище 0 градусів Цельсія");
}

// task 3

const user = {
  userName: "",
  email: "1asd@gmail.com",
  password: "123456",
  isLoginCorrect(email, password) {
    return email == this.email && password == this.password;
  },
};

// console.log(user.isLoginCorrect("1asd@.com", 123456));

const wrongEmail = prompt("Введіть вашу пошту: ");
const wrongPassword = prompt("Введіть ваш пароль: ");

console.log(user.isLoginCorrect(wrongEmail, wrongPassword));

// task 4

const movie = {
  title: "",
  director: "",
  year: 2020,
  rating: 10,
  isMoviePopular() {
    return this.rating > 8;
  },
};

if (movie.isMoviePopular()) {
  console.log("Це дуже гарний фільм!");
} else console.log("Поганий фільм");
