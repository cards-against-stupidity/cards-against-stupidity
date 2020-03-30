package org.wcci.cardsagainststupidity.storage.repositories;

import org.springframework.data.repository.CrudRepository;
import org.wcci.cardsagainststupidity.models.Card;
import org.wcci.cardsagainststupidity.models.Deck;

import java.util.Optional;

public interface DeckRepository extends CrudRepository<Deck, Long> {
    
    Optional<Deck> findDeckByTitle(String title);
    
    Optional<Deck> findDeckByCards(Card card);
    
}
