package org.wcci.cardsagainststupidity.storage;

import org.wcci.cardsagainststupidity.models.Card;
import org.wcci.cardsagainststupidity.models.Deck;

import java.util.Collection;
import java.util.Optional;

public interface DeckStorage {
    
    Optional<Deck> findById(Long id);
    
    Optional<Deck> findDeckByTitle(String title);
    
    Optional<Deck> findDeckByCards(Card card);

    Collection<Deck> findAllDecks();

    void save(Deck deck);

    void delete(Long id);
    
}
