// import movieTempletes from "./templates/tmp.hbs";

// const data = {
//   title: "Inception",
//   director: "Christopher Nolan",
//   duration_minutes: 148,
//   year_released: 2010,
//   is_animated: false,
//   won_oscar: true,
//   language: "English",
// };
import movieTempletes from "./templates/movie.hbs";

const data = {
  movies: [
    {
      title: "The Matrix",
      director: "Lana Wachowski, Lilly Wachowski",
      year_released: 1999,
      duration_minutes: 136,
    },
    {
      title: "The Godfather",
      director: "Francis Ford Coppola",
      year_released: 1972,
      duration_minutes: 175,
    },
  ],
};

const makeup = movieTempletes(data);

document.getElementById("app").innerHTML = makeup;
