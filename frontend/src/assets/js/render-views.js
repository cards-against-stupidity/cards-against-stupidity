import {
    DeckCreator
} from './builders/deck-creator.js';
import {
    addDeckToDb
} from './all-crud.js'
import { CardCreator } from './builders/card-creator.js';

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
    anchor.removeChild(anchor.firstChild)
    const deckIndex = document.createElement('div')
    deckIndex.classList.add('study-mode--card-view')

    const studyMode = document.createElement('section')
    studyMode.classList.add('study-mode')
 

    deck.cards.forEach(card => {
        console.log(card)
       const newCard = new CardCreator()
        .setFront('div', card.term)
        .setBack('div', card.definition)
        .render()
    deckIndex.appendChild(newCard) 
    })
    
 studyMode.appendChild(deckIndex)
 anchor.append(studyMode)

}


const anchor = document.querySelector('#main-element')
renderAllDecks();
export {
    renderEditDeck,
    renderAllDecks,
    renderStudyMode
}