import {renderAllDecks } from './renderViews.js'

const deleteDeck = (id) => {
    fetch ('http://localhost:8080/decks/delete?id=' + id, {
        method : 'DELETE'
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



export {deleteDeck, addDeckToDb}