   let currentCard = document.querySelector('.current-card')
   const getCurrentCard = () => {
       currentCard = document.querySelector('.current-card')
       addEventListener('dblclick', flipIt);
       return currentCard;
   }

   const flipIt = (e) => {
       console.log('card-flip');
       currentCard.classList.toggle('flip-show')
       currentCard.querySelector('.single-card__card-front').classList.toggle('flip-hide')
       currentCard.querySelector('.single-card__card-back').classList.toggle('flip-show')
   }



   const nextCard = (e) => {
       if (e.keyCode == 39) {
           const nextCard = currentCard.nextElementSibling
           nextCard.classList.remove('next-card')
           currentCard.classList.remove('current-card');
           currentCard.classList.add('previous-card');
           nextCard.classList.add('current-card')
           getCurrentCard();
       }
   }
   
   window.addEventListener('keyup', nextCard)

   getCurrentCard();

   currentCard.previousElementSibling




     class VideoCreator {
         constructor() {
             this._container = document.createElement('div');
             this.add.classList.add('col-lg-4 col-md-4 col-sm-6 col-12 mt--30 youtuber')
             this._titleContainer = document.createElement('div')
             this._container.appendChild(this._titleContainer);

         }
         addTitle = (title) => {
             this._titleContainer.innerText = title;
            return this;

         } 
         }


