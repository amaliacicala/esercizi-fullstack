const persons = [
  {
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25
  },
  {
    id: 2,
    firstName: 'Maria',
    lastName: 'Verdi',
    age: 32
  },
  {
    id: 3,
    firstName: 'Giovanni',
    lastName: 'Rossi',
    age: 35
  }
];

function fetchPersonById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const person = persons.find(item => item.id === id);
      
      if (person) {
        return resolve(JSON.stringify(person));
      }

      return reject(`Person with id: ${id} doesn't exist`);
    }, 1000);
  });
}

fetchPersonById(2)
.then((resolve) => { 
  console.log(JSON.parse(resolve)) 
})
.catch
// .catch(error => {
//   console.log(`${error.message} - Person with this id doesn't exist`)
// })

fetchPersonById(4)
.then((resolve) => { 
  console.log(JSON.parse(resolve)) 
})
.catch // Posso scrivere solo .catch per far tornare il messaggio del reject della promise, o c'è un altro modo per farlo? 

// .catch(error => {
//   console.log(`${error.message} - Person with this id doesn't exist`)
// })

