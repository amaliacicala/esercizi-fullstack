# Async Management - Exercise 5

Implementare le funzioni `fetchPersonById` e `fetchJobById`, le quali dato un id devono restituire rispettivamente:

- La persona che ha come identificativo l'id passato come parametro
- Il tipo di lavoro che ha come identificativo l'id passato come parametro

La prima funzione (`fetchPersonById`) deve restituire una `Promise` con un delay di 1000 millesecondi (`setTimeout`)
La prima funzione (`fetchJobById`) deve restituire una `Promise` con un delay di 500 millesecondi (`setTimeout`)

Infine implementare il codice necessario che si occupa di stampare in console il risultato della **prima** `Promise` che viene risolta.
N.B: esiste un metodo che, dato in input un array di `Promise`, attende fino a quando una delle `Promise` non viene risolta o rigettata.
