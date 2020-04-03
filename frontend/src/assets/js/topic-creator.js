class TopicCreator {

    constructor() {
        this._container = document.createElement('div');
        this._container.className = 'topic';
        this._title = document.createElement('div');
    }

    setTitle(elementType, value) {
        let titleElem = document.createElement(elementType);
        titleElem.innerText = value;
        this._title.appendChild(titleElem);
        return this;
    }

    render() {
        return this._container;
    }
}

export {
    TopicCreator
}