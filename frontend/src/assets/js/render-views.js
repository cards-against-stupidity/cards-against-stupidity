import {
    DeckCreator
} from './builders/deck-creator.js';
import {
    CardCreator
} from './builders/card-creator.js';
import {
    EditDeckBuilder
} from './builders/edit-deck-builder.js';
import {
    TopicCreator
} from './builders/topic-creator.js';
import {
    NavBar
} from './builders/nav-builder.js';
import {
    addDeckToDb,
    addCardToDb,
    addTopicToDb,
    updateCardOnDeck,
    fetchTopicFromTitle
} from './all-crud.js';

import {
    createStudyMode
} from "./study-mode.js";
import {
    goToAllTopics,
    goToStudyMode,
    goToAllDecks
} from './app.js';
import { TimerBuilder } from './builders/timer-builder.js';

const renderNav = (object) => {
    const nav = new NavBar()
        .createLi('username', 'Username')
        .createLi('currentpage', 'current page');

    return nav.render();
}
const renderEditDeck = (deck) => {
    const editDeckSection = document.createElement('section')
    editDeckSection.classList.add('edit-deck')
    const editDeckIndex = document.createElement('div')
    editDeckIndex.classList.add('edit-deck--card-index')

    const editDeckHeader = document.createElement('div');
    editDeckHeader.classList.add('edit-deck--header');
  
    const studyButton = document.createElement('div');
    studyButton.innerText = 'Go To Study Mode';
    studyButton.classList.add('go-to-study')
    studyButton.addEventListener('click', ()=>goToStudyMode(deck));
    
    editDeckHeader.innerHTML= `<h2>Edit Deck:  ${deck.title}</h2>`;
    editDeckSection.appendChild(editDeckHeader)
    editDeckSection.append(studyButton);
    const enableEditing = ()=> {
        let allCards = document.querySelectorAll(".edit-deck--card");
        const clickOut = () => {

            let someCard = document.querySelector('.editing')
            const term = someCard.querySelector(`input[name="term"]`)

            let definition = someCard.querySelector(`textarea[name="definition"]`)
            const replaced = new EditDeckBuilder()

            document.addEventListener('click', (e) => {
                if (e.target == document.querySelector('.edit-deck--card-index ')) {
                    let oldTerm = term.placeholder;
                    replaced.setTerm((term.value != '' ? term.value : term.placeholder))
                    replaced.setDefinition((definition.value != '' ? definition.value : definition.placeholder))
                 
                    let cardForm = new FormData()
                        cardForm.append('oldTerm', oldTerm)
                        cardForm.append('updatedTerm', replaced._cardTerm.innerText)
                        cardForm.append('updatedDef', replaced._cardDefinition.innerText)
                    
                    someCard.replaceWith(replaced.render())
                    updateCardOnDeck(deck, cardForm);
                    // console.log(someCard)
                }
            })
        }
        allCards.forEach(card => {
            const cardContent = card;
            // const editButton = card.querySelector('.edit')
            cardContent.addEventListener('click', () => {
                console.log(deck.id)
                const newCard = new EditDeckBuilder()
                let term = card.firstElementChild;
                let definition = card.firstElementChild.nextElementSibling.nextElementSibling
                newCard.addCreateNewCard(deck, term.textContent, definition.textContent)
                    .addClass('editing')
                card = card.replaceWith(newCard.render())
                clickOut();
            })
        })
    }
    const createAddCard = () =>{
        let addCard = new EditDeckBuilder()
        .setTerm("Click To Add New...")
        .setDefinition('...')
        .render();
    editDeckIndex.appendChild(addCard);
    }
    const buildEditDeck = (deckJson) => {
        createAddCard();
        deckJson.cards.forEach(card => {
           let newDeck = new EditDeckBuilder()
           .setTerm(card.term)
           .setDefinition(card.definition)
           .render();
          editDeckIndex.appendChild(newDeck);
        })
    
   
    editDeckSection.appendChild(editDeckIndex)
    enableEditing();
    }
fetch('http://localhost:8080/decks/id/' + deck.id)
    .then(results => results.json())
    .then(deckJson => buildEditDeck(deckJson))

    return editDeckSection;
}

const renderAllTopics = () => {
    const topicSection = document.createElement('section')
    topicSection.classList.add('all-topics')

    const topicIndex = document.createElement('div')
    topicIndex.classList.add('topics-display');

    let header = new TopicCreator()
        .newElement('div', "Topic Title")
        .newElement('div', "# Decks")
        .newElement('div', "")
        .render();
    topicIndex.appendChild(header)

    const createFooter = () => {
        let footer = new TopicCreator()
            .newInput()
            .newElement('div', "")
            .newButton("Add New")
        return footer.render();
    }

    const buildAllTopics = (topics) => {
        topics.forEach((topic) => {
            let newTopic = new TopicCreator()
                .setTitle(topic)
                .newElement('div', topic.decks.length)
                .addCrud(topic)
                .render();
            topicIndex.appendChild(newTopic)
        })
        topicIndex.appendChild(createFooter());
        topicSection.appendChild(topicIndex);

        let submit = topicSection.querySelector('#submit-new-topic');
        let input = topicSection.querySelector('#new-topic-title')
        submit.addEventListener('click', () => {
            addTopicToDb(input.value)
            goToAllTopics();
        })

        // let allTopics = document.querySelectorAll('.single-topic')
        // allTopics.forEach(topicElement => { 
        //     // const link = topicSection.querySelector(`[id=${topic.title}]`)
        //     topicElement.addEventListener('click', () => {
        //         console.log(topicElement.innerText);
        //         // goToAllDecks(topic);
        //     })
        // })

    }
    fetch('http://localhost:8080/topics')
        .then(results => results.json())
        .then(allTopics => buildAllTopics(allTopics))

    return topicSection;
}

const renderAllDecks = (topic) => {
    const deckMode = document.createElement('Section');
    const deckIndex = document.createElement('div')
    const decksHeader = document.createElement('div')
    decksHeader.classList.add('all-decks-header')
    decksHeader.innerHTML = `All Decks in <span> ${topic.title}</span>`;
    deckMode.appendChild(decksHeader)
    deckMode.classList.add('deck-mode')
    deckIndex.classList.add('deck-index');

    const buildAddDeck = () => {
        const newDeckElement = new DeckCreator()
            .makeIntoAddDeck();
        deckIndex.appendChild(newDeckElement);
        const submitNewDeck = newDeckElement.querySelector(`button`);
        const input = newDeckElement.querySelector(`input`);
        submitNewDeck.addEventListener('click', () => {
            let newDeckJSON = {
                title: input.value
            }
            addDeckToDb(topic, newDeckJSON);
        })
        input.addEventListener('keyup', (e) => {
            if (e.keyCode == 13) {
                let newDeckJSON = {
                    title: input.value
                }
                addDeckToDb(topic, newDeckJSON)
            }
        })
    }
    const buildAllDecks = (jsonData) => {
        jsonData.decks.forEach(deck => {
            const newDeck = new DeckCreator()
                .addOptions(deck)
                .setTopCardTitle(deck.title)
                // .renderSubCards()
                .render()
            deckIndex.appendChild(newDeck);
        });
        deckMode.appendChild(deckIndex);
        buildAddDeck();
  
    }
    fetch('http://localhost:8080/topics/' + topic.title)
        .then(results => results.json())
        .then(json => buildAllDecks(json))

return deckMode;
}

const renderStudyMode = (deck) => {

    const studyMode = document.createElement('section');
    const header = document.createElement('div')
    header.innerHTML = `Studying <span>${deck.title}</span>`
    header.addEventListener('click', ()=>{
        fetchTopicFromTitle(deck.topic);
    })
    const deckIndex = document.createElement('div')
    studyMode.classList.add('study-mode')
    studyMode.appendChild(header);
    header.id = 'study-mode-header';
    deckIndex.classList.add('study-mode--card-view');
    
    const buildStudyMode = (deckResult) => {
        // deckResult.cards.forEach((card) => {
        //     let newCard = new CardCreator()
        //         .setFront('div', card.term)
        //         .setBack('div', card.definition)
        //         .render();
        //     deckIndex.appendChild(newCard)
        // })
        for (let i = 0; i < deckResult.cards.length - 1; i++) {
            let newCard = new CardCreator()
            .setFront('div', deckResult.cards[i].term)
            .setBack('div', deckResult.cards[i].definition)
            .render();

            if (i === 0) {
                newCard.classList.add('current-card');
            }
            deckIndex.appendChild(newCard);
        }
        new TimerBuilder();
        studyMode.appendChild(deckIndex);
        // anchor.appendChild(studyMode);
        createStudyMode();
    }

    fetch('http://localhost:8080/decks/id/' + deck.id)
        .then(results => results.json())
        .then(deckResult => buildStudyMode(deckResult))

 
 return studyMode;       
}

const renderEditCard = (id) => {


}

const renderAllCards = () => {
    const anchor = document.querySelector('.edit-deck')
    const cardIndex = document.querySelector('.edit-deck--header');

    const buildAllCards = (jsonData) => {
        jsonData.forEach(card => {
            const newCard = new CardCreator()
                .setFront(elementType.value)
                .setBack(elementType.value)
                .render()
            cardIndex.appendChild(newCard);
        });

        anchor.appendChild(cardIndex);
    }
    fetch('http://localhost:8080/cards')
        .then(results => results.json())
        .then(buildAllCards)

    const submitNewCard = document.querySelector('#add-new-card');
    submitNewCard.addEventListener('click', () => {
        let newTerm = document.querySelector('#new-card-title').value
        let newDef = document.querySelector('#new-card-definition').value
        

        addCardToDb(id, newTerm, newDef);
        buildAllCards();
    })
}

export {
    renderEditCard,
    renderAllCards,
    addCardToDb,
    renderAllDecks,
    renderEditDeck,
    renderStudyMode,
    renderAllTopics,
    renderNav
}