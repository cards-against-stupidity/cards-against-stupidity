import {
    DeckCreator
} from './builders/deck-creator.js';
import {
    CardCreator
} from './builders/card-creator.js';
import {
    EditDeckBuilder
} from './builders/edit-deck-builder.js';
import {
    addDeckToDb,
    addCardToDb
} from './all-crud.js';

import {
    createStudyMode
} from "./study-mode.js"
import { 
    goToStudyMode
} from "./app.js"

const renderEditDeck = (deck) => {
    deck.cards.forEach(card => {
        console.log(card.term)
        let newCard = new EditDeckBuilder ()
    })

}

const renderAllDecks = (anchor) => {
    const deckMode = document.createElement('Section');
    const deckIndex = document.createElement('div')
    deckMode.classList.add('deck-mode')
    deckIndex.classList.add('deck-index');

    const buildAddDeck = () => {
        const newDeckElement = new DeckCreator()
            .makeIntoAddDeck();
        deckIndex.appendChild(newDeckElement);
        const submitNewDeck = newDeckElement.querySelector(`button`);
        const input = newDeckElement.querySelector(`input`);
        submitNewDeck.addEventListener('click', () => {
            let newDeckJSON = {
                title : input.value
            }
            addDeckToDb(newDeckJSON);
        })
        input.addEventListener('keyup', (e) => {
            if (e.keyCode == 13) {
                       let newDeckJSON = {
                           title: input.value
                       }
                addDeckToDb(newDeckJSON)
            }
        })
    }

    const buildAllDecks = (jsonData) => {
        jsonData.forEach(deck => {
            const newDeck = new DeckCreator()
                .addOptions(deck)
                .setTopCardTitle(deck.title)
                // .renderSubCards()
                .render()
            deckIndex.appendChild(newDeck);
        });
        deckMode.appendChild(deckIndex);
        buildAddDeck();
        anchor.appendChild(deckMode)

    }
    fetch('http://localhost:8080/decks')
        .then(results => results.json())
        .then(json => buildAllDecks(json))
}

const renderStudyMode = (deck) => {
    const anchor = document.querySelector('#main-element')
    const studyMode = document.createElement('section');
    const deckIndex = document.createElement('div')
    studyMode.classList.add('study-mode')
    deckIndex.classList.add('study-mode--card-view');

    const buildStudyMode = (deckResult) => {
        deckResult.cards.forEach((card) => {
            let newCard = new CardCreator()
                .setFront('div', card.term)
                .setBack('div', card.definition)
                .render();
            deckIndex.appendChild(newCard)
        })
        studyMode.appendChild(deckIndex)
        anchor.appendChild(studyMode);
        createStudyMode();
    }

    fetch('http://localhost:8080/decks/id/' + deck.id)
        .then(results => results.json())
        .then(deckResult => buildStudyMode(deckResult))
}

const renderEditCard = (id) => {
  

}

const renderAllCards = () => {
    const anchor = document.querySelector('.edit-deck')
    const cardIndex = document.querySelector('.edit-deck--header');

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

    const submitNewCard = document.querySelector('#add-new-card');
    submitNewCard.addEventListener('click', () => {
        let jsonObject = {
            'term': document.querySelector('#new-card-title').value,
            'definition': document.querySelector('#new-card-definition').value
        }

        addCardToDb(jsonObject);
        buildAllCards();
    })
}






export {
    renderEditCard,
    renderAllCards,
    addCardToDb,
    renderAllDecks,
    renderEditDeck,
    renderStudyMode
}