class CardCreator {

    constructor() {
        this._container = document.createElement('div');
        this._front = document.createElement('div');
        this._back = document.createElement('div');
        this._container.className = 'single-card';
        this._front.className = 'single-card__card-front';
        this._back.className = 'single-card__card-back';
        this._container.appendChild(this._front);
        this._container.appendChild(this._back);
    }
    
    setFront(elementType, value) {
        let frontElem = document.createElement(elementType);
        frontElem.innerText = value;
        this._front.appendChild(frontElem);
        return this;
    }

    setBack(elementType, value) {
        let backElem = document.createElement(elementType);
        backElem.innerText = value;
        this._back.appendChild(backElem);
        return this;
    }

    render() {
        return this._container;
    }
}

export {
    CardCreator
}