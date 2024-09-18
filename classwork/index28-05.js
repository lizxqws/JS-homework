const players = [
  { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
  { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
  { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
  { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
  { id: "player-5", name: "Chelsy", timePlayed: 80, points: 48, online: true },
];

// ТАК МОЖНА

const filteredPlayers = players.filter(item => item.online);

console.log(filteredPlayers);

const repointedPlayers = filteredPlayers.map(item => [
  {
    ...item,
    points: item.points + 20,
  },
]);

console.log(repointedPlayers);

// const sortedPlayers = repointedPlayers.sort(
//   (a, b) => a.name.localeCompare[b.name]
// );

// console.log(sortedPlayers);

// АБО ТАК!!!!!!!!

// players
//   .filter(item => item.online)
//   .map(item => [
//     {
//       ...item,
//       points: item.points + 20,
//     },
//   ])
//   .sort((a, b) => a.name.localCompare[b.name]);

//   task 2
const cart = [
  { label: "Apples", price: 100, quantity: 2 },
  { label: "Bananas", price: 120, quantity: 3 },
  { label: "Lemons", price: 70, quantity: 4 },
];

const cartPrice = cart.reduce(
  (acc, { price, quantity }) => acc + price * quantity,
  0
);

console.log(cartPrice);
