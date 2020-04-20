package org.wcci.cardsagainststupidity.storage;

import org.springframework.stereotype.Service;
import org.wcci.cardsagainststupidity.models.Card;
import org.wcci.cardsagainststupidity.storage.repositories.CardRepository;

import java.util.Collection;
import java.util.Optional;

@Service
public class CardJPA implements CardStorage {
    
    private CardRepository cardRepository;
    
    public CardJPA(CardRepository cardRepository) {
        this.cardRepository = cardRepository;
    }
    
    @Override
    public Optional<Card> findById(Long id) {
        return cardRepository.findById(id);
    }
    
    @Override
    public Optional<Card> findCardByTerm(String term) {
        return cardRepository.findCardByTerm(term);
    }
    
    @Override
    public Iterable<Card> findCardsByDeckTitle(String title) {
        return cardRepository.findCardsByDeckTitle(title);
    }
    
    @Override
    public Iterable<Card> findCardsByDefinitionContaining(String search) {
        return cardRepository.findCardsByDefinitionContaining(search);
    }

    @Override
    public Collection<Card> findAllCards() {
        return (Collection<Card>) cardRepository.findAll();
    }

    @Override
    public void save(Card card) {
        cardRepository.save(card);
    }

    @Override
    public void delete(Long id) {
        cardRepository.deleteById(id);
    }
}
