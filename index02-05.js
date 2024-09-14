const friends = [
  { name: "Mango", online: false },
  { name: "Kiwi", online: true },
  { name: "Poly", online: false },
  { name: "Ajax", online: false },
];

const findFriendByName = (arr, friendName) => {
  for (const elem of arr) {
    if (friendName == elem.name) {
      return true;
    }
  }
  return false;
};

console.log(findFriendByName(friends, "123"));

const getAllNames = arr => {
  let newArr = [];
  for (const elem of arr) {
    newArr.push(elem.name);
  }
  return newArr;
};

console.log(getAllNames(friends));

const getOnlineFriends = arr => {
  let newArr = [];
  for (const elem of arr) {
    if (elem.online == true) {
      newArr.push(elem.name);
    }
  }
  return newArr;
};

console.log(getOnlineFriends(friends));
