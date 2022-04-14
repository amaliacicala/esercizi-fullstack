# Closure - Exercise 1

Implementare la funzione `greet` che accetta come argomento un saluto (`greeting`) e restituisce una closure che si occupa di concatenare il saluto passato come parametro con il nome della persona da salutare

Esempio:

```
const greetWithHello = greet('Hello'); // Hello
const greetWithBye = greet('Bye'); // Bye
const greetWithHi = greet('Hi'); // Hi

const greetPaulWithHello = greetWithHello('Paul'); // Hello, Paul
const greetPaulWithHi = greetWithHi('Paul'); // Hi, Paul
const greetJohnWithBye = greetWithBye('John'); // Bye, John
const greetSimonWithHello = greetWithHello('Simon'); // Hello, Simon
```

# Una closure è una funzione che restituisce a sua volta una funzione `innerFunction`. In questo caso la innerFunction accetterà un parametro che sarà il nome da salutare.
