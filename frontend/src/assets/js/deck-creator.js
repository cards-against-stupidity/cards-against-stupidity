import {renderEditDeck} from './renderViews.js'
import {deleteDeck} from './allCrud.js'

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

    addOptions(deckId) {
        let optionsWrapper = document.createElement('div');
        optionsWrapper.classList.add('single-deck--options');
        let edit = document.createElement('i');
        edit.addEventListener('click', ()=>{renderEditDeck(editId)})
        edit.classList.add('fas', 'fa-edit')
        let eye = document.createElement('i');
        eye.classList.add('fas', 'fa-eye')
        let trash = document.createElement('i');
         trash.addEventListener('click', () => {
             deleteDeck(deckId)
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