/* creo una funzione per recuperare i dati */
async function fetchData() {
    /* tramite blocco try/catch gestisco eventuali errori */
    try {
        /* prendo dati da url */
        const response = await fetch('https://ringsdb.com/api/public/cards/')
        /* trasformo dati in formato json */
        const data = await response.json()
        /* seleziono indice scelto */
        const card = data[1]
        /* imposto variabili per nome e immagine */
        const cardName = card.name
        const cardImage = card.imagesrc
        /* imposto selettore su h1 e img dell html */
        const h1 = document.querySelector('.card-title')
        const img = document.querySelector('.card-image')
        /* imposto nome e immagine presi da url nell html */
        h1.innerText = cardName
        img.setAttribute('src', `https://ringsdb.com/${cardImage}`)
    } catch (error) {
        console.error(error)
    }
}

fetchData()