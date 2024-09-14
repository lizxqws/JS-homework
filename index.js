//  імпортуємо IntersectionObserver

const imageObserver = new IntersectionObserver(
  (entries, observer) => {
    // Встановлюємо IntersectionObserver для кожного зображення з data-src атрибутом
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const image = entry.target;

        //   Для кожного зображення, яке стає видимим, змінюємо його src атрибут на data-src
        image.src = image.dataset.src;

        //   Додаємо плавне завантаження
        image.addEventListener("load", function () {
          image.classList.add("loaded");
        });

        //   Перестаємо спостерігати
        observer.unobserve(image);
      }
    });
  },
  { rootMargin: "50px " }
);

document.querySelectorAll("img").forEach(image => imageObserver.observe(image));
