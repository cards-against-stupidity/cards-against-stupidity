import {
    login
} from "./login.js";
import * as rend from "./render-views.js"


const clearView = () => {
    anchor.removeChild(anchor.firstElementChild);
}

// window.addEventListener('load', () => {
//     rend.renderAllDecks(anchor);
// })

const goToStudyMode = (deck) => {
    clearView();
    rend.renderStudyMode(deck);
}

const goToAllDecks = () => {
    location.reload();
    clearView();
    rend.renderAllDecks(anchor);
}

const goToAllTopics = () => {





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

addEventListener('#btn', login, 'click');
addEventListener('#all-decks', () => rend.renderAllDecks(anchor), 'click');


export {
    goToStudyMode,
    goToAllDecks
}