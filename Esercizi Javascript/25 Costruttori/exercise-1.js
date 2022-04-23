const person = {
  get firstName() {
    return this._firstName
  },

  set firstName(value) {
    this._firstName = value
  },

  get lastName() {
    return this._lastName
  },

  set lastName(value) {
    this._lastName = value
  },

  fullName() {
    return `${this.firstName} ${this.lastName}`
  }
}

const john = Object.create(person);
john.firstName = 'John';
john.lastName = 'Doe';

const simon = Object.create(person);
simon.firstName = 'Simon';
simon.lastName = 'Collins';

console.log(john.fullName()); // John Doe
console.log(simon.fullName()); // Simon Collins