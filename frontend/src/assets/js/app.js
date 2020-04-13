import {login} from "./login.js";
import * as rend from "./render-views.js"


const clearView = () => {
    anchor.removeChild(anchor.firstElementChild);
}

window.addEventListener('load', () => {
    rend.renderAllDecks(anchor);
})

const goToStudyMode = (deck)=>{
clearView();
rend.renderStudyMode(deck);
}

const goToAllDecks = ()=>{
location.reload();
clearView();
rend.renderAllDecks(anchor);
}

const goToAllTopics = () => {

}

const goToLogin = () => {

}

const addEventListener = (query, functionToRun) => {
    document.querySelectorAll(query).forEach(element => {
        element.addEventListener('click', event => {
            event.preventDefault();
            // clearView();
            functionToRun();
        });
    });
};

addEventListener('#btn', login);




const anchor = document.querySelector("#main-element")

export {
    goToStudyMode, 
    goToAllDecks
}