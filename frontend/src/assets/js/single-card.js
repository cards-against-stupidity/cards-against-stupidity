const currentCard = document.querySelector(".current-card");


const flipCard = () => {
    //switch them
    cardFront = currentCard.querySelector('.single-card__card-front');
    cardBack = currentCard.querySelector('.single-card__card-back');
    //ternary
    currentCard.classList.toggle("flip-show");
    cardFront.classList.toggle("flip-hide");
    cardBack.classList.toggle("flip-show");
};

currentCard.addEventListener("dblclick", flipCard);


