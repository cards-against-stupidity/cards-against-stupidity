package org.wcci.cardsagainststupidity.storage;

import org.wcci.cardsagainststupidity.models.Card;

import java.util.Collection;
import java.util.Optional;

public interface CardStorage {
    
    Optional<Card> findById(Long id);
    
    Optional<Card> findCardByTerm(String term);
    
    Iterable<Card> findCardsByDeckTitle(String title);
    
    Iterable<Card> findCardsByDefinitionContaining(String search);

    Collection<Card> findAllCards();

    void save(Card card);

    void delete(Long id);
}
