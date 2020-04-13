import {
    login
} from "./login.js";
import * as rend from "./render-views.js"


const clearView = () => {
    anchor.removeChild(anchor.firstElementChild);
}

const goToStudyMode = (deck) => {
    clearView();
    rend.renderStudyMode(deck);
}

const goToAllDecks = (topic) => {
    // location.reload();
    clearView();
    rend.renderAllDecks(anchor, topic);
}

const goToEditDeck = (deck) => {
    // location.reload();
    clearView();
    rend.renderEditDeck(deck);
}

const goToAllTopics = () => {
    anchor.appendChild(rend.renderAllTopics())
}

const goToLogin = () => {





}

const addEventListener = (query, functionToRun, event) => {
    document.querySelectorAll(query).forEach(element => {
        element.addEventListener(event, e => {
            e.preventDefault();
            // clearView();
            functionToRun();
        });
    });
};


const anchor = document.querySelector("#main-element")

// window.addEventListener('load', ()=> goToAllTopics())

addEventListener('#btn', login, 'click');
addEventListener('#all-decks', () => rend.renderAllDecks(anchor), 'click');
addEventListener('#all-topics', () => goToAllTopics(), 'click');


export {
    goToStudyMode,
    goToAllDecks,
    goToEditDeck,
    goToAllTopics
}