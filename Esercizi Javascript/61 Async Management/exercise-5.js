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

const jobs = [
  {
    id: 1,
    jobTitle: 'CEO'
  },
  {
    id: 2,
    jobTitle: 'Project Manager'
  },
  {
    id: 3,
    jobTitle: 'Developer'
  }
];

function fetchPersonById(id) {
  return new Promise((resolve, reject) => {
    
    const person = persons.find(person => person.id === id);

    setTimeout(() => {
      if (person) {
        resolve(JSON.stringify(person))
      } else {
        reject(new Error(`Id ${id} does not exist`))
      };
    })
  }, 1000)
}

function fetchJobById(id) {
  return new Promise((resolve, reject) => {

    const job = jobs.find(job => job.id === id);

    setTimeout(() => {
      if (job) {
        resolve(JSON.stringify(job))
      } else {
        reject(new Error(`Id ${id} does not exists`))
      }
    })
  }, 500)
}

Promise.all([fetchPersonById(2), fetchJobById(2)])
.then(console.log)
.catch(error => {console.log('Error: ', error.message)})