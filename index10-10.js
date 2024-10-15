// Створити секундомір, який буде мати можливість зупинятися та продовжуватися за допомогою кнопок
// "Старт" та "Стоп".Також потрібно мати можливість скидати лічильник до 0.

const btnStart = document.querySelector(".start");
const btnStop = document.querySelector(".stop");
const res = document.querySelector(".counter");

let seconds = 0;
const timer = () =>
  setInterval(() => {
    seconds += 1;
    res.innerHTML = seconds;
  }, 1000);

let timerId = null;

btnStart.addEventListener("click", () => {
  timerId = timer();
});

btnStop.addEventListener("click", () => {
  clearInterval(timerId);
});
