const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,
}

// const key = Object.keys(person);
// const value = Object.values(person);

// for (let i = 0; i < key.length; i++) {
//   console.log(`${key[i]}: ${value[i]}`)
// }

const key = Object.keys(person);

for (let i = 0; i < key.length; i++){
  console.log(`${key[i]}: ${person[key[i]]}`);
}