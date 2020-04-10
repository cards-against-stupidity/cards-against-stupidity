



const addDeckToDb = (deck) => {
     fetch ('http://localhost:8080/decks/create', {
        method: 'PUT',
        headers : {
            "content-type": "application/json"
        },
        body : JSON.stringify(deck)
    })
}

const submitNewDeck = document.querySelector('#submit-new-deck');
const newDeckForm = document.querySelector('#add-deck');
submitNewDeck.addEventListener('click', ()=>{
    let jsonObject = {
        'title' : document.querySelector('#new-deck-name').value
    }
    console.log(jsonObject)
    addDeckToDb(jsonObject);
})