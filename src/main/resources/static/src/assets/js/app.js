import {
    login
} from "./login.js";
import * as rend from "./render-views.js"


const changeCurrentPageName = (pageTitle) =>{
document.querySelector("#currentpage").innerText = pageTitle;
}
const clearView = () => {
    if(anchor.firstElementChild != null){ 
    anchor.removeChild(anchor.firstElementChild)
    }

}
const goToAbout = () => {
    clearView();
    changeCurrentPageName("About Us")
    anchor.appendChild(rend.renderAbout());

}
const goToStudyMode = (deck) => {
    clearView();
    changeCurrentPageName("Study Mode " + deck.title)
    anchor.appendChild(rend.renderStudyMode(deck));
}

const goToAllDecks = (topic) => {
    // location.reload();
    clearView();
    changeCurrentPageName(topic.title != null ? topic.title : topic)
    anchor.appendChild(rend.renderAllDecks(topic));
}

const goToEditDeck = (deck) => {
    // location.reload();
    clearView();
    changeCurrentPageName("Editing " + deck.title)
    anchor.appendChild(rend.renderEditDeck(deck));
}

const goToAllTopics = () => {
    //  location.reload();
    clearView();
    changeCurrentPageName("All Topics")
    anchor.appendChild(rend.renderAllTopics())
}

const goToLogin = () => {
    clearView();
    changeCurrentPageName("Welcome to Random Access Cards")
    anchor.appendChild(rend.renderLogin())
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
const body = document.querySelector('body')

body.append(rend.renderNav())
goToLogin();
// window.addEventListener('load', ()=> goToAllTopics())

addEventListener('#login', ()=>goToLogin(), 'click');
addEventListener('#about-us', () => goToAbout(), 'click');
addEventListener('#all-topics', () => goToAllTopics(), 'click');


export {
    goToStudyMode,
    goToAllDecks,
    goToEditDeck,
    goToAllTopics,
    goToAbout
}