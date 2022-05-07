const person = {
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25
};

// const id = person.id;
// const firstName = person.firstName;
// const lastName = person.lastName;
// const age = person.age;

const { id = person.id, firstName = person.firstName, lastName = person.lastName, age = person.age } = person
  
console.log(id, firstName, lastName, age);