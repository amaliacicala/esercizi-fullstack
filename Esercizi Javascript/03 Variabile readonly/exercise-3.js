// const students = ['Paul', 'George', 'Lucas'];

// function addStudent(student) {
//   students.push('Marco')
// }

// addStudent('Marco');
// console.log(students);

const students = ['Paul', 'George', 'Lucas'];

function addStudent(newStudent) {
  students.push(newStudent)
}

let newStudent = 'Marco';

addStudent(newStudent);
console.log(students);

/*
Possiamo aggiungere un valore all'array nonostante esso sia `readonly` (const)
perché il nuovo valore non viene aggiunto dichiarando nuovamente la variabile,
bensì attraverso una funzione (che ne esegue il push).
*/