import {
    DeckCreator
} from './deck-creator.js';

const renderEditDeck = () => {
     console.log('yes')}



const renderAllDecks = (jsonData) => {
    const anchor = document.querySelector('.deck-index');
    jsonData.forEach(deck => {
        const newDeck = new DeckCreator()
            .addOptions(deck.id)
            .setTopCardTitle(deck.title)
            // .setFirstCardTitle(deck.cards[0].term)
            .render()

        anchor.appendChild(newDeck);
    });
}

const fetchAllDecks = () => {
    fetch('http://localhost:8080/decks')
        .then(results => results.json())
        .then(renderAllDecks)
}

window.addEventListener('load', () => {
    fetchAllDecks();
})


export{ renderEditDeck,
renderAllDecks }