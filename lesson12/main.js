// ======= 1 =======
const user = {
  name: "Vladimir",
  age: 27,
  color: "Green",
};

console.log(user);
// ======= 1 =======

// ======= 2 =======
user.sayHello = function (name) {
  return 'Hello "' + name + '"';
};

console.log(user.sayHello("Vladimir"));
// ======= 2 =======

// ======= 3 =======

const people = [
  {
    name: "Alex",
    age: 15,
    isAdmin: false,
  },
  {
    name: "Ivan",
    age: 19,
    isAdmin: true,
  },
  {
    name: "Emily",
    age: 50,
    isAdmin: false,
  },
  {
    name: "James",
    age: 21,
    isAdmin: false,
  },
  {
    name: "Michael",
    age: 43,
    isAdmin: true,
  },
];

let regularPeopleCount = 0;

for (let i = 0; i < people.length; i++) {
  if (!people[i].isAdmin) {
    regularPeopleCount++;
  }
}
console.log(`Кол-во простых пользователей: ${regularPeopleCount}`);

// ======= 3 =======
