package org.wcci.cardsagainststupidity.storage.repositories;

import org.springframework.data.repository.CrudRepository;
import org.wcci.cardsagainststupidity.models.Card;

import java.util.Optional;

public interface CardRepository extends CrudRepository<Card, Long> {
    
    Optional<Card> findCardByTerm(String term);
    
    Iterable<Card> findCardsByDeckTitle(String title);
    
    Iterable<Card> findCardsByDefinitionContaining(String search);
    
}
