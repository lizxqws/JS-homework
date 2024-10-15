// Завдання 2

// Створити таймер, який буде починати відлік з 30 секунд та зменшувати
// час кожну мілісекунду.При досягненні 10 секунд, таймер повинен відтворювати якусь
// анімацію, а при досягненні 0 секунд — виконувати певну дію, наприклад, робити кнопку
// почати знову активною.

const btnStart = document.querySelector(".start");
const res = document.querySelector(".counter");

let seconds = 30;
let timerId = null;
res.innerHTML = `Залишилося: ${seconds} секунд`;

const timer = () =>
  setInterval(function () {
    seconds -= 1;

    if (seconds > 0) {
      res.innerHTML = `Залишилося: ${seconds} секунд`;
    }

    if (seconds == 10) {
      res.style.transform = "rotate(20deg)";
      res.style.transition = "transform 0.2s";
    }

    if (seconds <= 0) {
      clearInterval(timerId);
      btnStart.disabled = false;
      res.style.transform = "rotate(0)";
      res.innerHTML = "Час вийшов!";
    }
  }, 100);

//   Я зробила 100 мілісекунд, тому що 1 мілісекунда це дуже швидко і анімацію ледь видно

btnStart.addEventListener("click", () => {
  if (timerId) {
    clearInterval(timerId);
  }
  seconds = 30;
  res.innerHTML = `Залишилося: ${seconds} секунд`;
  btnStart.disabled = true;
  timerId = timer();
});
