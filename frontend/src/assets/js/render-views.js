import {
    DeckCreator
} from './builders/deck-creator.js';
import {
    addDeckToDb
} from './all-crud.js'

const renderEditDeck = (id) => {
    console.log('yes')

}
const renderAllDecks = () => {
    // location.reload();
    const deckMode = document.querySelector('.deck-mode')
    const deckIndex = document.querySelector('.deck-index');
    const buildAllDecks = (jsonData) => {

        jsonData.forEach(deck => {
            const newDeck = new DeckCreator()
                .addOptions(deck)
                .setTopCardTitle(deck.title)
                // .setFirstCardTitle(deck.cards[0].term)
                .render()
            deckIndex.appendChild(newDeck);
        });
        deckMode.appendChild(deckIndex);
        anchor.appendChild(deckMode)
    }
    fetch('http://localhost:8080/decks')
        .then(results => results.json())
        .then(json => buildAllDecks(json))
}

const submitNewDeck = document.querySelector('#submit-new-deck');
const input = document.querySelector('#new-deck-name')
input.addEventListener('keyup', (e) => {
    if (e.keyCode == 13) {
        addDeckToDb(input.value)
    }
})

submitNewDeck.addEventListener('click', () => {
    let newTitle = input.value;
    addDeckToDb(newTitle);

})

const renderStudyMode = (deck) => {

 const studyMode = document.querySelector('.study-mode')
 const deckIndex = document.querySelector('.study-mode--card-view');
    const buildStudyMode = (decks) => { 
        deck.cards.forEach(card => {
        console.log(card);
    })
    }

    fetch('http://localhost:8080/decks')
        .then(results => results.json())
        .then(deck => buildStudyMode(deck))

}


const anchor = document.querySelector('#main-element')
renderAllDecks();
export {
    renderEditDeck,
    renderAllDecks,
    renderStudyMode
}