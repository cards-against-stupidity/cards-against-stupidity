import {
    renderAllDecks
} from './render-views.js'

const deleteDeck = (id) => {
    fetch('http://localhost:8080/decks/delete?id=' + id, {
        method: 'DELETE'
    }).then(renderAllDecks)
    location.reload();
}

const addDeckToDb = (deckTitle) => {
    let jsonObject = {
        'title': deckTitle
    }
    fetch('http://localhost:8080/decks/create', {
        method: 'PUT',
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(jsonObject)
    }).then(renderAllDecks)
    location.reload();
}

export {
    deleteDeck,
    addDeckToDb
}