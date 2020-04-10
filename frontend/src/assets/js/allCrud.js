import {renderAllDecks } from './renderViews.js'
const deleteDeck = (id) => {
    fetch ('http://localhost:8080/decks/delete?id=' + id, {
        method : 'DELETE'
    })
}

export {deleteDeck}