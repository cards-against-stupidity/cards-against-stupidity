import {
    renderAllDecks,
    renderAllCards
} from './render-views.js'


const deleteDeck = (id) => {
    fetch('http://localhost:8080/decks/delete?id=' + id, {
        method: 'DELETE'
    }).then(renderAllDecks)
}

const addDeckToDb = (deck) => {
    fetch('http://localhost:8080/decks/create', {
        method: 'PUT',
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(deck)
    })
}

const addCardToDb = (card) => {
    fetch('http://localhost:8080/desks/2/add-card', {
        method: 'PUT',
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(card)
    })
}

const deleteCard = (id) => {
    fetch('http://localhost:8080/card/delete?id=' + id, {
        method: 'DELETE'
    }).then(renderAllCards)
}

export {
    deleteDeck,
    addDeckToDb,
    deleteCard,
    addCardToDb
}