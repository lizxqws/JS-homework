const car = {
  make: "Toyota",
  model: "Camry",
  year: 2020,
  features: ["power windows", "rear camera", "navigation"],
  safety: {
    airbags: true,
    antilock_brakes: true,
    stability_control: true,
  },
};

const {
  model,
  safety: { airbags, antilock_brakes, stability_control },
} = car;

console.log(model);
console.log(airbags);

const movie = {
  title: "The Shawshank Redemption",
  director: {
    name: "Frank Darabont",
    nationality: "American",
  },
  actors: ["Tim Robbins", "Morgan Freeman"],
  release_year: 1994,
  ratings: {
    imdb: 9.3,
    rotten_tomatoes: 90,
  },
};

const {
  title,
  director: { nationality: nationalityDirector },
  actors: [, actor2],
} = movie;

console.log(title);
console.log(nationalityDirector);
console.log(actor2);
