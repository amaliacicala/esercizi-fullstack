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

    if (person) {
      resolve(person);
    } else {
      reject(new Error('Person not found'))
    }

  });
}

function fetchJobById(id) {
  return new Promise((resolve, reject) => {

    const jobById = jobs.find(job => job.id === id);
    const job = jobs.map(job => job.jobTitle);

    // const jobById = jobs.find(job => job.id === id);
    // const job = jobById.map(job => job.jobTitle);


    // const jobById = jobs.find(job => job.id === id);
    // function mapJob() {
    //   return jobById.map(job => job.jobTitle);
    // }


    // const jobById = jobs.find(job => job.id === id).map(jobs.jobTitle);


    // const findJobById = jobs.find(job => job.id === id);
    // function mapJobById() {
    //   const job = findJobById.map(job => job.jobTitle);
    //   return job
    // }

    if (jobById) {
      resolve(job);
    } else {
      reject(new Error('Person not found'))
    }

  });
}

Promise.all([fetchPersonById(2), fetchJobById(2)])
.then(console.log)
.catch(error => {
  console.log('Error: ' + error.message)
})