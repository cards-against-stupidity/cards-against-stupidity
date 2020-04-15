import {
    renderAllCards, renderEditDeck
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

    let topicId;

    fetch(`http://localhost:8080/decks/id/${id}`)
    .then(deck => deck.json())
    .then(json => {
        topicId = json.topic.id;

        console.log(topicId)

        fetch(`http://localhost:8080/topics/id/${topicId}`)
        .then(topic => topic.json())
        .then(topicJson => {
            fetch('http://localhost:8080/decks/delete?id=' + id, {
                method: 'DELETE'
            })
                .then(() => goToAllDecks(topicJson))
        }).catch(e => console.error(e))

    }).catch(e => console.error(e))
}

const addDeckToDb = (topic, deck) => {

    fetch(`http://localhost:8080/topics/${topic.id}/add-deck`, {
        method: 'PUT',
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(deck)
    })
    .then(() => goToAllDecks(topic))
  
}


// CARDS // 
const addCardToDb = (id, term, def) => {
    let card = {
        term : term,
        definition : def
    }
    fetch(`http://localhost:8080/decks/${id}/add-card`, {
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

const updateCardOnDeck = (deck, cardForm) => {
    fetch(`http://localhost:8080/decks/${deck.id}/edit-card`, { 
        method: 'PATCH',
        body : cardForm
    }).then(() => goToEditDeck(deck))
}

const findTopicByDeckId = (deck) =>{
    fetch('http://localhost:8080/deck/' + deck.id ) 
    .then(response => response.json())
    .then(topic => console.log(topic));
    return this;
}
export {
    deleteDeck,
    addDeckToDb,
    deleteCard,
    addCardToDb,
    deleteTopic,
    addTopicToDb,
    updateCardOnDeck,
    findTopicByDeckId
}