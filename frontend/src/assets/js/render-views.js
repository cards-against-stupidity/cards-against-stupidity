import {
    DeckCreator
} from './builders/deck-creator.js';
import {
    addDeckToDb
} from './all-crud.js'
import {
    CardCreator
} from './builders/card-creator.js';
import {
    addCardToDb
} from './all-crud.js'



const renderEditDeck = (id) => {
    console.log('yes')

}
const renderAllDecks = () => {
    const anchor = document.querySelector('.deck-mode')
    const deckIndex = document.querySelector('.deck-index');
    anchor.removeChild(deckIndex);
    const buildAllDecks = (jsonData) => {
        jsonData.forEach(deck => {
            const newDeck = new DeckCreator()
                .addOptions(deck.id)
                .setTopCardTitle(deck.title)
                // .setFirstCardTitle(deck.cards[0].term)
                .render()
            deckIndex.appendChild(newDeck);
        });

        anchor.appendChild(deckIndex);
    }
    fetch('http://localhost:8080/decks')
        .then(results => results.json())
        .then(buildAllDecks)
}

window.addEventListener('load', () => {
    renderAllDecks();
})

const submitNewDeck = document.querySelector('#submit-new-deck');
submitNewDeck.addEventListener('click', () => {
    let jsonObject = {
        'title': document.querySelector('#new-deck-name').value
    }
    addDeckToDb(jsonObject);
    renderAllDecks();
})

const renderEditCard = (id) => {
    console.log('yes')

}

const renderAllCards = () => {
    const anchor = document.querySelector('.card-mode')
    const cardIndex = document.querySelector('.card-index');
    anchor.removeChild(cardIndex);
    const buildAllCards = (jsonData) => {
        jsonData.forEach(card => {
            const newCard = new CardCreator()
                .setFront(elementType.value)
                .setBack(elementType.value)
                .render()
            cardIndex.appendChild(newCard);
        });

        anchor.appendChild(cardIndex);
    }
    fetch('http://localhost:8080/cards')
        .then(results => results.json())
        .then(buildAllCards)
}

window.addEventListener('load', () => {
    renderAllCards();
})

const submitNewCard = document.querySelector('#add-new-card');
submitNewCard.addEventListener('click', () => {
    let jsonObject = {
        'term': document.querySelector('#new-card').value
    }
    addCardToDb(jsonObject);
    renderAllCards();
})

export {
    renderEditDeck,
    renderAllDecks
}

export {
    renderEditCard,
    renderAllCards
}