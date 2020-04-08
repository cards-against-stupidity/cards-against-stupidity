class DeckCreator {

    constructor() {
        this._container = document.createElement('div');
        this._container.className = 'single-deck'
        this._firstCard = document.createElement('div');
        this._firstCard.classList.add('single-deck', 'single-deck--first-card')
        this._secondCard = document.createElement('div');
        this._secondCard.classList.add('single-deck', 'single-deck--second-card')
        this._thirdCard = document.createElement('div');
        this._thirdCard.classList.add('single-deck', 'single-deck--third-card')
        this._topCard = document.createElement('div');
        this._topCardTitle = document.createElement('div')
    }

    addOptions() {
        let edit = document.createElement('i');
        edit.classList.add('fas', 'fas-edit')
        let eye = document.createElement('i');
        eye.classList.add('fas', 'fas-eye')
        let trash = document.createElement('i');
        trash.classList.add('fas', 'fas-trash')
        let share = document.createElement('i');
        share.classList.add('fas', 'fas-share')

        this._topCard.appendChild(edit);
        this._topCard.appendChild(eye);
        this._topCard.appendChild(trash);
        this._topCard.appendChild(share);

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