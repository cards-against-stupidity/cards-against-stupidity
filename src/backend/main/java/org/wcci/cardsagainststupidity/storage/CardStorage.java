package org.wcci.cardsagainststupidity.storage;

import org.wcci.cardsagainststupidity.models.Card;

import java.util.Optional;

public interface CardStorage {
    
    Optional<Card> findCardByTerm(String term);
    
    Iterable<Card> findCardsByDeckTitle(String title);
    
    Iterable<Card> findCardsByDefinitionContaining(String search);
    
}
