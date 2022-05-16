# Dom Tree - Exercise 6

Implementare il codice necessario per generare dinamicamente il form `person-form`.
Al caricamento della pagina occorre creare ed eseguire la funzione `initForm` che si occuperà di generare dinamicamente e aggiungere al form i campi: `firstName`, `lastName` e `age`.
Al click del pulsante "Submit" del form richiamare il metodo `submitPersonForm`, il quale si dovrà occupare di:

- Prevenire l'evento di default che avviene al submit del form
- Creare un oggetto `person` contenente i valori del form popolato dall'utente
- Eseguire il `console.log` dell'oggetto `person` creato
