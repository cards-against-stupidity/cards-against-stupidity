package org.wcci.cardsagainststupidity.controllers;

import org.springframework.web.bind.annotation.*;
import org.wcci.cardsagainststupidity.models.Card;
import org.wcci.cardsagainststupidity.models.Deck;
import org.wcci.cardsagainststupidity.storage.CardStorage;
import org.wcci.cardsagainststupidity.storage.DeckStorage;

import java.util.Collection;
import java.util.Optional;

@RestController
@RequestMapping("decks")
public class DeckController {
    
    private DeckStorage deckStorage;
    
    private CardStorage cardStorage;
    
    public DeckController(DeckStorage deckStorage, CardStorage cardStorage) {
        this.deckStorage = deckStorage;
        this.cardStorage = cardStorage;
    }
    
    @GetMapping
    public Collection<Deck> allDecks() {
        return deckStorage.findAllDecks();
    }
    
    @GetMapping("/{title}")
    public Deck deckByTitle(@PathVariable String title) {
        return deckStorage.findDeckByTitle(title).orElse(null);
    }
    
    @GetMapping("/id/{id}")
    public Deck deckById(@PathVariable Long id) {
        return deckStorage.findById(id).orElse(null);
    }
    
    @PutMapping("/create")
    public Collection<Deck> createDeck(@RequestBody Deck deckToAdd) {
        deckStorage.save(deckToAdd);
        return deckStorage.findAllDecks();
    }
    
    @DeleteMapping("/delete")
    public Collection<Deck> deleteDeck(@RequestParam Long id) {
        deckStorage.delete(id);
        return deckStorage.findAllDecks();
    }
    
    
    @PutMapping("/{id}/add-card")
    public Deck addCardToDeck(@PathVariable Long id, @RequestBody Card card) {
        Optional<Deck> deckOptional = deckStorage.findById(id);
        if (deckOptional.isPresent()) {
            Deck returnTo = deckOptional.get();
            Card newCard = new Card(card.getTerm(), card.getDefinition(),
                    returnTo);
            cardStorage.save(newCard);
            return returnTo;
        } else {
            return null;
        }
    }

    @PatchMapping("/{id}/edit-card")
    public Deck editCardInDeck(@PathVariable Long id,
                               @RequestParam String updatedTerm, 
                               @RequestParam String oldTerm,
                               @RequestParam String updatedDef){
        Optional<Deck> deckOptional = deckStorage.findById(id);
        Optional<Card> cardToUpdate = cardStorage.findCardByTerm(oldTerm);
        if(cardToUpdate.isPresent()){
            cardToUpdate.get().setTerm(updatedTerm);
            cardToUpdate.get().setDefinition(updatedDef);
            cardStorage.save(cardToUpdate.get());
        }
        return deckOptional.orElse(null);
    }
}
