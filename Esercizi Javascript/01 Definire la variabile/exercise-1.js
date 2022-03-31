let personName = 'Paul'; // La variabile era all'interno della funzione

function canPlay() {
  if (true) {
    personName += ' plays football';
  }
  
  console.log(personName);
}

canPlay();