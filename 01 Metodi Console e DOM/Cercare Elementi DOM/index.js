/* Implementare il codice necessario per:
    Recuperare il valore di ciascun campo di input e creare un oggetto person
    contenente le proprietà: firstName, lastName e age.
    Infine recuperare l'elemento form aggiungere l'attributo data-person 
    contenente l'oggetto person in formato json.
 */

/* Recuperare il valore di ciascun campo di input */
const inputValues = document.querySelectorAll('.form-input');
/* creare un oggetto person contenente le proprietà: firstName, lastName e age. */
const firstName = document.getElementById('firstName').value;
const lastName = document.getElementById('lastName').value;
const age = document.getElementById('age').value;

const person = {
    firstName: firstName,
    lastName: lastName,
    age: age,
}
/* Infine recuperare l'elemento form aggiungere l'attributo data-person 
    contenente l'oggetto person in formato json. */
const form = document.getElementById('formData');

form.setAttribute('data-person', JSON.stringify(person));

console.log(form)