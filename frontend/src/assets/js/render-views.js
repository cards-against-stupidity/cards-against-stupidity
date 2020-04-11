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
    const anchor = document.querySelector('.deck-mode')
    const deckIndex = document.querySelector('.deck-index');
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
renderAllDecks();
export {
    renderEditDeck,
    renderAllDecks
}