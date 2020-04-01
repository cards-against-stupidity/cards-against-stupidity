describe('Tests for clicking a card and flippin it', () => {
    let currentCard;
    let cardFront;
    let cardBack;

    let clicker = {
        flipCard: () => {
            flipCardMethod();
        }
    }
    describe('can access all the elements correctly', () => {
        beforeEach(() => {
            currentCard = document.querySelector('.current-card');
            cardFront = currentCard.firstElementChild;
            cardBack = cardFront.nextElementSibling;
        });
        it('can get the current card and its children', () => {
            //make sure childen exist
            expect(cardFront.classList.contains('single-card__card-front')).toBe(true);
            expect(cardBack.classList.contains('single-card__card-back')).toBe(true);
        });
        it('can access innerHTML', () => {
            expect(cardFront.innerText).toBe('Card Title');
            expect(cardBack.innerText).toBe('Card description')
        });
        describe('can toggle the \'show\' feature on the element', () => {
            beforeEach(() => {
                currentCard = document.querySelector('.current-card');
                cardFront = currentCard.firstElementChild;
                cardBack = cardFront.nextElementSibling;
            });
            it('clicking the card works', () => {
               let spy = spyOn(currentCard, 'click');
                currentCard.addEventListener('click', clicker.flipCard)
                currentCard.click();
                // flipCardMethod();
                expect(spy).toHaveBeenCalled();
            });
            it('on click it should add or remove the class \'show\'', ()=>{
                currentCard.addEventListener('click', flipCard(currentCard));
                currentCard.click();
                expect(cardFront.classList.contains('show')).toBe(false);
            })
        });
    });
});