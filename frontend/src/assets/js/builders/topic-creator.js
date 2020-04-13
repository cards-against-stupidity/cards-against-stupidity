import {
    deleteTopic
} from '../all-crud.js';

class TopicCreator {

    constructor() {
        this._container = document.createElement('div');
        this._container.className = 'single-topic';
        this._title = document.createElement('div');
    }

    setTitle(value) {
        this._title.innerHTML = value;
        this._title.id = value;
        this._title.name = value;
        this._container.appendChild(this._title);
        return this;
    }
    newElement(elementType, value) {
        let newElement = document.createElement(elementType);
        newElement.innerHTML = value;
        this._container.appendChild(newElement)
        return this;
    }

    addCrud(topic) {
        let crudNode = document.createElement('div');
        let crud = ['Edit', 'Delete']
        crud.forEach(element => {
            let button = document.createElement('button');
            button.classList.add(`topic-${element.toLowerCase()}`)
            button.addEventListener('click', ()=>deleteTopic(topic.id))
            button.innerText = element;
            crudNode.appendChild(button);
        })
        this._container.appendChild(crudNode)
  
        return this;
    }

    render() {

        return this._container;
    }
}

export {
    TopicCreator
}