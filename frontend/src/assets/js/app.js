import {
    login
} from "./login.js";
import * as rend from "./render-views.js"

import {
    setbarvalues,
} from "./navbar.js"; //add to app.js at beginning

history.pushState({},`goToLogin()`);


const clearView = () => {
    if(anchor.firstElementChild != null){ 
    anchor.removeChild(anchor.firstElementChild)
    }
}

const goToStudyMode = (deck) => {
<<<<<<< HEAD
=======
    // console.log(deck)
    history.pushState({},`goToStudyMode()`,"");
>>>>>>> add navbar + arrow
    clearView();
    anchor.appendChild(rend.renderStudyMode(deck));
}

const goToAllDecks = (topic) => {
    // location.reload();
    history.pushState({},`goToAllDecks()`,"");
    clearView();
    anchor.appendChild(rend.renderAllDecks(topic));
}

const goToEditDeck = (deck) => {
    // location.reload();
    history.pushState({},`goToEditDeck()`,"");
    clearView();
    anchor.appendChild(rend.renderEditDeck(deck));
}

const goToAllTopics = () => {
    //  location.reload();
    history.pushState({},`goToAllTopics()`,"");
    clearView();
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

document.getElementById('backarrow').addEventListener("click", () => {
    console.log('you clicked the arrow');
    history.go(-1);

});

export {
    goToStudyMode,
    goToAllDecks,
    goToEditDeck,
    goToAllTopics
}