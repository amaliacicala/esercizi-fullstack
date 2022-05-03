# Error handling - Exercise 1
Implementare all'interno della classe `BankAccount` un controllo sui metodi `deposit` e `withdraw`.
Entrambi i metodi devono poter lanciare un errore qualora venisse passato un `amount` negativo.
Il metodo `withdraw` deve poter lanciare un errore anche qualora venisse passato un `amount` superiore rispetto al totale presente sul conto corrente.