import {
    deleteTopic
} from '../all-crud.js';
import { goToAllDecks } from '../app.js';

class TopicCreator {

    constructor() {
        this._container = document.createElement('div');
        this._container.className = 'single-topic';
        this._title = document.createElement('div');
    }

    setTitle(topic) {
        this._title.innerHTML = topic.title;
        this._title.id = topic.title;
        this._title.name = topic.title;
        this._title.addEventListener('click', ()=>goToAllDecks(topic))
        this._container.appendChild(this._title);
        return this;
    }
    newElement(elementType, value) {
        let newElement = document.createElement(elementType);
        newElement.innerHTML = value;
        this._container.appendChild(newElement)
        return this;
    }
    newInput(){
        let input = document.createElement('input');
        input.name = 'title';
        input.id = 'new-topic-title';
        this._container.appendChild(input)
        return this;
    
    
    }
    newButton(text) {
         let button = document.createElement('button');
         button.id = 'submit-new-topic';
         button.innerText = text;
          this._container.appendChild(button);
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