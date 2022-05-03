# JSON methods - Exercise 3

In questo esercizio le cose non vanno come dovrebbero, nonostante abbia creato una copia di `person1`, modificando la proprietà `city` di `person2` viene modificato anche il valore per `person1`, questo avviene perché ho creato una shallow copy.
Come posso sistemare il codice affinché modificando il valore di `person2` questo non modifichi anche `person1`?
