package org.wcci.cardsagainststupidity.storage;

import org.springframework.stereotype.Service;
import org.wcci.cardsagainststupidity.models.Card;
import org.wcci.cardsagainststupidity.models.Deck;
import org.wcci.cardsagainststupidity.storage.repositories.DeckRepository;

import java.util.Collection;
import java.util.Optional;

@Service
public class DeckJPA implements DeckStorage {
    
    private DeckRepository deckRepository;
    
    public DeckJPA(DeckRepository deckRepository) {
        this.deckRepository = deckRepository;
    }
    
    @Override
    public Optional<Deck> findById(Long id) {
        return deckRepository.findById(id);
    }
    
    @Override
    public Optional<Deck> findDeckByTitle(String title) {
        return deckRepository.findDeckByTitle(title);
    }
    
    @Override
    public Optional<Deck> findDeckByCards(Card card) {
        return deckRepository.findDeckByCards(card);
    }

    @Override
    public Collection<Deck> findAllDecks() {
        return (Collection<Deck>) deckRepository.findAll();
    }

    @Override
    public void save(Deck deck) {
        deckRepository.save(deck);
    }

    @Override
    public void delete(Long id) {
        deckRepository.deleteById(id);

    }


}
