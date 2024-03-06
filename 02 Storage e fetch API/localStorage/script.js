//imposto selettore sul bottone e lo assegno a variabile
const btn = document.querySelector('.btn')

function setUsername(username) {
    //imposto selettore sullo span attualmente vuoto e lo assegno a variabile
    const usernameElement = document.querySelector('.title-name')
    //imposto il testo della variabile alla argomento della funzione
    usernameElement.innerText = username
    //imposto oggetto nel localStorage con chiave title-name e argomento username
    localStorage.setItem('title-name', username)
}
//imposto ascoltatore sulk click del bottone
btn.addEventListener('click', () => {
    //do variabile al selettore del nome nell input
    const input = document.querySelector('.firstname')
    //imposto variabile per il valore inserito nell input firstname
    const value = input.value
    //passo il valore come argomento a setUsername
    setUsername(value)
})
//prendo oggetto con chiave title-name e lo salvo
const savedUsername = localStorage.getItem('title-name')
//se l'oggetto salvato esiste lo passa come argomento a setUsername
if (savedUsername) {
    setUsername(savedUsername)
}