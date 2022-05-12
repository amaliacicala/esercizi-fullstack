# Network Requests - Exercise 1

Implementare il codice necessario per recuperare tramite una richiesta HTTP la lista dei todos presente al seguente url: https://jsonplaceholder.typicode.com/todos. Successivamente creare dinamicamente una lista di elementi (`<li>`) contenente il titolo del todo (proprietà `title` presente nella collezione di oggetti restituiti dalla response) e appenderla all'elemento `.todo-list`.
N.B: il body della response contiene la lista dei todos in formato json, utilizzare il metodo `.json` presente nella response per eseguire la deserializzazione.
