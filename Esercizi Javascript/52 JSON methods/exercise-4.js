const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,
};

// const json = JSON.stringify(person);
const json = JSON.stringify({id: person.id, age: person.age});

console.log(json); // Should return: { id: 1, age: 25 }