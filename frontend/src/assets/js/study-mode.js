const allCards = document.querySelectorAll(".single-card");
let i = 0


const getVisibleCards = () => {
    console.log("i: " + i);
    let currentCard = allCards[i];
    currentCard.classList.add('current-card', "show");
  
    //if there is a next card
    if (i < allCards.length) {
        console.log('there is a next card');
        let nextCard = allCards[i + 1]
        nextCard.classList.add("next-card", "show");
        // let cardToHide = nextCard.nextElementSibling != null ? nextCard.nextElementSibling.classList.remove('show') : null;
   
    }
    //if there is a previous card
    if (i > 0) {
        console.log('there is a prev card');
        let previousCard = allCards[i - 1]
        previousCard.classList.add("previous-card");
        // let cardToHide = previousCard.nextElementSibling != null ? previousCard.nextElementSibling.classList.remove('show') : null;
 
    }
    if ((i - 2 ) > 0) {
        allCards[i - 2].classList.remove('show');
    }
    allCards.forEach(card => {
        if (!card.classList.contains("show")) {
            card.classList.add('hidden-card')
        }
        if (card.classList.contains('next-card')) {
            card.classList.remove('hidden-card')
        }
    })

}

const getNextCard = () => {
    i++
    getVisibleCards();
}

const flipCard = () => {

    //switch them
    cardFront = currentCard.querySelector('.single-card__card-front');
    cardBack = currentCard.querySelector('.single-card__card-back');
    //ternary
    currentCard.classList.toggle("flip-show");
    cardFront.classList.toggle("flip-hide");
    cardBack.classList.toggle("flip-show");
};

const handleKey = (event) => {
    switch (event.keyCode) {
        case 39:
            console.log("i: " +  i + "before running");
            getNextCard();
            break;
        case 37:
            i--;
            previousCard();
            break;
        default:
    }
}
window.addEventListener('keyup', handleKey)

getVisibleCards();