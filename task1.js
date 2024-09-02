const image = document.querySelector(".slider__image");
const slider = document.querySelector(".slider__input");

slider.addEventListener(
  "input",
  _.debounce(
    () => {
      image.style.width = `${slider.value}%`;
    },
    1000,
    { trailing: true, leading: false }
  )
);
