// Завдання 1

// Створити таймер, який буде починати відлік з 1 години та зменшувати
// час кожну хвилину.При досягненні 30 хвилин, таймер повинен відправляти
// повідомлення екран про те, що залишилось менше половини часу.

const res = document.querySelector(".counter");

let minutes = 60;
res.innerHTML = `Залишилося: ${minutes} хвилин`;

let timerId = setInterval(function () {
  minutes -= 1;

  if (minutes > 0) {
    res.innerHTML = `Залишилося: ${minutes} хвилин`;
  }

  if (minutes == 30) {
    res.innerHTML = "Залишилося менше половини часу";
  }
  if (minutes <= 0) {
    clearInterval(timerId);
    res.innerHTML = "Час вийшов!";
  }
}, 60000);
