const person1 = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25
};

const person2 = person1;

// Modifica la proprietà "firstName" di person2 in "Simon"
person2.firstName = 'Simon';

console.log(person1);
console.log(person2);

// Sai spiegare il perché modificando l'oggetto `person2` viene modificato anche l'oggetto `person1`?

/* 
L'oggetto `person1` viene modificato perché non ne è stata creata una copia. Il nuovo valore
della proprietà (Simon) è stato sovrascritto, così come il nome dell'oggetto (da person1 a person2).
*/