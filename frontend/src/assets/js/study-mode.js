import {renderStudyMode } from './render-views.js';

const createStudyMode = () =>{ 

const allCards = document.querySelectorAll('.single-card')
let i = 0;
let currentCard = allCards[i];

const getVisibleCards = () => { 
   
    currentCard.classList.add('current-card');

    if (currentCard.classList.contains('next-card')) {
        currentCard.classList.remove('next-card');
    }
    if(currentCard.classList.contains('previous-card')){
        currentCard.classList.remove('previous-card')
    }
    //if there is a next card
    if (i < allCards.length - 1) {
        allCards[i + 1].classList = "single-card next-card"
    }
    //if there is a previous card
    if (i > 0) {
        allCards[i - 1].classList = "single-card previous-card"
    }
    if(i >= 2){ 
    allCards[i - 2].classList = 'single-card hidden-card'
    }
    if(i + 2 <= allCards.length){
        for(let nextHidden = i + 2; nextHidden <= allCards.length; nextHidden++)
        allCards[nextHidden].classList = 'single-card hidden-card'
    }
}


const getNextCard = () => {
    i = (i !== allCards.length - 1 ? i + 1 : i)
    getVisibleCards();
}

const getPreviousCard = () => {
    i = (i !== 0 ? i - 1 : i)
    getVisibleCards();
}

const flipCard = () => {
    //switch them
    currentCard = allCards[i];
    let cardFront = currentCard.querySelector('.single-card__card-front');
    let cardBack = currentCard.querySelector('.single-card__card-back');
    //ternary
    currentCard.classList.toggle("flip-show");
    cardFront.classList.toggle("flip-hide");
    cardBack.classList.toggle("flip-show");
};

const handleKey = (event) => {
    switch (event.keyCode) {
        case 70:
            flipCard();
            break;
        case 39:
            getNextCard();
            break;
        case 37:
            getPreviousCard();
            break;
        default:
    }
}
window.addEventListener('keyup', handleKey)

getVisibleCards();
};

export {
    createStudyMode
};