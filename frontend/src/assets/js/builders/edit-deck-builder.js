import { addCardToDb } from "../all-crud.js"

class EditDeckBuilder {
    constructor() {
        this._container = document.createElement('ul')
        this._container.classList.add('edit-deck--card')
        this._cardTerm = document.createElement('li')
        this._span = document.createElement('span')
         
        this._cardDefinition = document.createElement('li')
        this._button = document.createElement('button');
    }

    setTerm(value){
        this._cardTerm.innerText = value;
        return this;
    }
    setDefinition(value){
        this._cardDefinition.innerText = value;
        return this;
    }
    addCreateNewCard(deck){
        let inputTerm = document.createElement('input')
        inputTerm.type = "text";
        inputTerm.name = "term";
        inputTerm.placeholder = "Card Title ...";
        inputTerm.id = "new-card-title";
        this._cardTerm.appendChild(inputTerm);

        let inputDef = document.createElement('textarea');
        inputDef.name = "definition";
        inputDef.id = "new-card-definition";
        inputDef.placeholder = "Card Definition ...";
        this._cardDefinition.appendChild(inputDef);

        this._button.innerText = 'submit';
        this._button.id = 'add-new-card';
        this._container.append(this._button);
        this._button.addEventListener('click', ()=>{
            addCardToDb(inputTerm.value, inputDef.value)
            
        })
        return this;
    }
    render(){
        this._container.appendChild(this._cardTerm)
        this._container.appendChild(this._span);
        this._container.appendChild(this._cardDefinition)
        return this._container
    }
}

export {
    EditDeckBuilder
}