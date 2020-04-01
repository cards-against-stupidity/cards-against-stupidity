const flipCard = (elem) => {
    //switch them
    cardFront = elem.firstElementChild;
    cardBack = cardFront.nextElementSibling;
    //ternary
    if (cardFront.classList.contains('show')) {
        cardFront.classList.remove('show')
        cardBack.classList.add('show')
    } else {
        cardFront.classList.add('show')
        cardBack.classList.remove('show')
    }
};

