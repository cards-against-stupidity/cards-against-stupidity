import {
    renderEditDeck
} from '../render-views.js'
import {
    deleteDeck
} from '../all-crud.js'
import {
    goToStudyMode,
    goToAllDecks,
} from '../app.js'


class DeckCreator {

    constructor() {
        this._container = document.createElement('div');
        this._container.className = 'deck-wrapper'
        this._firstCard = document.createElement('div');
        this._firstCard.classList.add('single-deck', 'single-deck--first-card')
        this._secondCard = document.createElement('div');
        this._secondCard.classList.add('single-deck', 'single-deck--second-card')
        this._thirdCard = document.createElement('div');
        this._thirdCard.classList.add('single-deck', 'single-deck--third-card')
        this._topCard = document.createElement('div');
        this._topCard.classList = ('single-deck single-deck--top-card')
        this._topCardTitle = document.createElement('div')

    }
    addOptions(deck) {
        let optionsWrapper = document.createElement('div');
        optionsWrapper.classList.add('single-deck--options');
        let edit = document.createElement('i');
        edit.addEventListener('click', () => {
            renderEditDeck(deck.id)
        })
        edit.classList.add('fas', 'fa-edit')
        let eye = document.createElement('i');
        eye.classList.add('fas', 'fa-eye')
        eye.addEventListener('click', () => {
            goToStudyMode(deck)
        })
        let trash = document.createElement('i');
        trash.addEventListener('click', () => {
            deleteDeck(deck.id)
            goToAllDecks();
        })
        trash.classList.add('fas', 'fa-trash')
        let share = document.createElement('i');
        share.classList.add('fas', 'fa-share')

        optionsWrapper.appendChild(edit);
        optionsWrapper.appendChild(eye);
        optionsWrapper.appendChild(trash);
        optionsWrapper.appendChild(share);
        this._topCard.appendChild(optionsWrapper)
        return this;
    }

    setTopCardTitle(title) {
        this._topCardTitle.innerText = title;
        return this;
    }

    makeIntoAddDeck(){
        this._topCard.classList.add('add-deck')
        // const addDiv = document.createElement('div')
        const input = document.createElement('input')
        const button = document.createElement('button')
        this._topCardTitle.innerText = 'Add A Deck'

        input.id = 'new-deck-name'
        input.name = 'title'
        input.type = 'text'
        input.autocomplete = 'off'

        button.id = 'submit-new-deck'
        button.name = 'submit-new-deck'
        button.type = 'submit'
        button.innerText = "Submit"

        this._topCard.appendChild(this._topCardTitle);
        this._topCard.appendChild(input);

        this._topCard.appendChild(button);
        
        this._container.appendChild(this._topCard);
        return this._container;
    }

    setFirstCardTitle(title) {
        this._firstCard.innerText = title;
        return this;
    }

    setSecondCardTitle(title) {
        this._secondCard.innerText = title;
        return this;
    }

    setThirdCardTitle(title) {
        this._thirdCard.innerText = title;
        return this;
    }

    renderSubCards(){

          return this._container;

    }
    render() {
        this._topCard.appendChild(this._topCardTitle);
        this._container.appendChild(this._topCard);
        this._container.appendChild(this._firstCard);
        this._container.appendChild(this._secondCard);
        this._container.appendChild(this._thirdCard);
       
      
        return this._container;
    }
}

export {
    DeckCreator
}