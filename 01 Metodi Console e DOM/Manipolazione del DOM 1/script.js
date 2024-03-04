/* Crea la tua To-Do List mediante i metodi visti nel video.
Crea una funzione che ti permette di:

- Creare una lista aggiungendo il task desiderato mediante il bottone `Aggiungi`.
- Creare un checkbox per ogni task aggiunto. */


const addProduct = () => {
  /* puntiamo alla ul */
  const ul = document.querySelector('ul')
  /* puntiamo all input */
  const input = document.querySelector('input')
  /* creiamo un li nel document */
  const li = document.createElement('li');
  /* creiamo un input nel document */
  const checkBox = document.createElement('input')
  /* puntiamo al valore dell input */
  const value = input.value;
  /* aggiungiamo li a ul */
  ul.appendChild(li)
  /* impostiamo tipo input su checkbox */
  checkBox.setAttribute('type', 'checkbox')
  /* dichiriamo che il testo della li corrisponda
  al valore inserito in input */
  li.innerText = value;
  /* aggiungiamo la checkbox all li */
  li.appendChild(checkBox)
};
