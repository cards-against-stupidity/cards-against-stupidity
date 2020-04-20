import {
    renderAllCards,
    renderEditDeck
} from './render-views.js'
import {
    goToAllDecks,
    goToAllTopics,
    goToEditDeck,
    goToStudyMode
} from './app.js';

// TOPICS // 
const addTopicToDb = (title) => {
    let jsonObject = {
        title: title
    }
    fetch('https://random-access-cards.herokuapp.com/topics/create-topic', {
            method: 'PUT',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(jsonObject)
        })
        .then(topics => goToAllTopics(topics))
}

const deleteTopic = (topicId) => {
    fetch('https://random-access-cards.herokuapp.com/topics/delete?id=' + topicId, {
        method: 'DELETE',
    }).then(result => goToAllTopics(result))

}
// DECKS // 
const deleteDeck = (id) => {
    let topicId;
    fetch(`https://random-access-cards.herokuapp.com/decks/id/${id}`)
        .then(deck => deck.json())
        .then(json => {
            topicId = json.topic.id;

            console.log(topicId)

            fetch(`https://random-access-cards.herokuapp.com/topics/id/${topicId}`)
                .then(topic => topic.json())
                .then(topicJson => {
                    fetch('https://random-access-cards.herokuapp.com/decks/delete?id=' + id, {
                            method: 'DELETE'
                        })
                        .then(() => goToAllDecks(topicJson))
                }).catch(e => console.error(e))
        }).catch(e => console.error(e))
}

const addDeckToDb = (topic, deck) => {

    fetch(`https://random-access-cards.herokuapp.com/topics/${topic.id}/add-deck`, {
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
        term: term,
        definition: def
    }
    fetch(`https://random-access-cards.herokuapp.com/decks/${id}/add-card`, {
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
    fetch('https://random-access-cards.herokuapp.com/card/delete?id=' + id, {
        method: 'DELETE'
    }).then(renderAllCards)
}

const updateCardOnDeck = (deck, cardForm) => {
    fetch(`https://random-access-cards.herokuapp.com/decks/${deck.id}/edit-card`, {
        method: 'PATCH',
        body: cardForm
    }).then(() => goToEditDeck(deck))
}

const fetchTopicFromTitle = (title) => {
    fetch('https://random-access-cards.herokuapp.com/topics/' + title)
        .then(results => results.json())
        .then(topic => goToAllDecks(topic))
}

const getDeckFromDeckTitleOnly = (deckTitle) => {
    fetch('https://random-access-cards.herokuapp.com/decks/' + deckTitle)
        .then(results => results.json())
        .then(deck => goToStudyMode(deck));
}
export {
    deleteDeck,
    addDeckToDb,
    deleteCard,
    addCardToDb,
    deleteTopic,
    addTopicToDb,
    updateCardOnDeck,
    fetchTopicFromTitle,
    getDeckFromDeckTitleOnly
}