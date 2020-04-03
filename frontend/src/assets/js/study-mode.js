const allCards = document.querySelectorAll(".single-card");
let i = 0;
let currentCard = allCards[i];


const getVisibleCards = () => {
    let currentCard = allCards[i];
    currentCard.classList.add('current-card', 'show');
    if(currentCard.classList.contains('next-card')){
        currentCard.classList.remove('next-card');
    }
    //if there is a next card
    if (i < allCards.length - 1) {
        let nextCard = allCards[i + 1]
        nextCard.classList.add("next-card");
        // let cardToHide = nextCard.nextElementSibling != null ? nextCard.nextElementSibling.classList.remove('show') : null;
    }
    //if there is a previous card
    if (i > 0) {
        allCards[i].classList.remove('next-card')
        allCards[i - 1].classList.toggle('current-card')
        allCards[i - 1].classList.toggle('previous-card');
        // let cardToHide = previousCard.nextElementSibling != null ? previousCard.nextElementSibling.classList.remove('show') : null;
    }
    if ((i - 2) >=   0) {
        allCards[i - 2].classList.remove('show');
    }
    allCards.forEach(card => {
        card.classList.add('hidden-card')
        if (!card.classList.contains("show")) {
            card.classList.add('hidden-card')
        }
        if (card.classList.contains('next-card')) {
            card.classList.remove('hidden-card')
        }
    })
}

const getNextCard = () => {
    console.clear()
    i++
    getVisibleCards();
}

const getPreviousCard = () => {
    i--
    getVisibleCards();
}

const flipCard = () => {
    //switch them
    currentCard = allCards[i];
    cardFront = currentCard.querySelector('.single-card__card-front');
    cardBack = currentCard.querySelector('.single-card__card-back');
    //ternary
    currentCard.classList.toggle("flip-show");
    cardFront.classList.toggle("flip-hide");
    cardBack.classList.toggle("flip-show");
};

const handleKey = (event) => {

    console.log(event);
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