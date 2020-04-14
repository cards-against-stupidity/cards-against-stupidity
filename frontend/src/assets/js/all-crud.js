import {
    renderAllCards
} from './render-views.js'
import { goToAllDecks, goToAllTopics, goToEditDeck } from './app.js';

// TOPICS // 
const addTopicToDb = (title) => {
    let jsonObject = {
        title: title
    }
    fetch('http://localhost:8080/topics/create-topic', {
        method: 'PUT',
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(jsonObject)
    })
    .then(topics => goToAllTopics(topics))
}

const deleteTopic = (topicId) => {
    fetch('http://localhost:8080/topics/delete?id=' + topicId, {
            method: 'DELETE',
        }).then(result => goToAllTopics(result))
  
}
// DECKS // 
const deleteDeck = (id) => {
    fetch('http://localhost:8080/decks/delete?id=' + id, {
        method: 'DELETE'
    })
    .then(allDecks => goToAllDecks(allDecks))
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
    .then(updatedTopic => goToAllDecks(updatedTopic))
}


// CARDS // 
const addCardToDb = (term, def) => {
    let card = {
        "term" : term,
        "definition" : def
    }
    fetch('http://localhost:8080/decks/2/add-card', {
        method: 'PUT',
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(card)
    })
    .then(deckJson => deckJson.json())
    .then(deck => goToEditDeck(deck))
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
    deleteTopic,
    addTopicToDb
}