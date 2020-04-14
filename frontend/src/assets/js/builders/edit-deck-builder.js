import { addCardToDb } from "../all-crud.js"

class EditDeckBuilder {
    constructor() {
        this._container = document.createElement('ul')
        this._container.classList.add('edit-deck--card')
        this._cardTerm = document.createElement('li')
        this._span = document.createElement('span')
         
        this._cardDefinition = document.createElement('li')
        this._button = document.createElement('button');
        // this._edit = document.createElement('li')
        // this._edit.className = 'edit';
        // this._edit.innerText = 'edit';
        // this._edit.addEventListener('click', ()=>this.edit())
    }

    setTerm(value){
        this._cardTerm.innerText = value;
        return this;
    }
    setDefinition(value){
        this._cardDefinition.innerText = value;
        return this;
    }
    addClass(classlist){
        this._container.classList.add(classlist);
        return this;
    }
    addCreateNewCard(termPlacehold, defPlacehold){
        let inputTerm = document.createElement('input')
        inputTerm.type = "text";
        inputTerm.name = "term";
        inputTerm.placeholder = termPlacehold;
        inputTerm.id = "new-card-title";
        this._cardTerm.appendChild(inputTerm);

        let inputDef = document.createElement('textarea');
        inputDef.name = "definition";
        inputDef.id = "new-card-definition";
        inputDef.placeholder = defPlacehold;
        this._cardDefinition.appendChild(inputDef);

        this._button.innerText = 'submit';
        this._button.id = 'add-new-card';

        // this._container.append(this._button);
        this._container.addEventListener('keyup', (e)=>{
            if(e.keyCode == 13){ 
            addCardToDb(inputTerm.value, inputDef.value)
            }
        })
        return this;
    }
    edit(){
        this._edit.innerText = "Save";
        return this;
    }
    render(){
        this._container.appendChild(this._cardTerm)
        this._container.appendChild(this._span);
        this._container.appendChild(this._cardDefinition)
        // this._container.appendChild(this._edit);
        return this._container
    }
}

export {
    EditDeckBuilder
}