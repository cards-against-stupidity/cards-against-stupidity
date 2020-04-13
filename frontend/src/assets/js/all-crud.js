import {
    renderAllCards
} from './render-views.js'
import { goToAllDecks } from './app.js'


const deleteTopic = (topicId) => {
    fetch('http://localhost:8080/topics/delete?id=' + topicId, {
            method: 'DELETE',
        }).then(result => result.json())
     
}


const deleteDeck = (id) => {
    fetch('http://localhost:8080/decks/delete?id=' + id, {
        method: 'DELETE'
    })
}

const addDeckToDb = (id, deck) => {
    console.log(id.id);
    fetch(`http://localhost:8080/topics/${id.id}/add-deck`, {
        method: 'PUT',
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(deck)
    })
}

const addCardToDb = (card) => {
    fetch('http://localhost:8080/decks/2/add-card', {
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
    addCardToDb,
    deleteTopic
}