package org.wcci.cardsagainststupidity.controllers;

import org.springframework.web.bind.annotation.*;
import org.wcci.cardsagainststupidity.models.Deck;
import org.wcci.cardsagainststupidity.storage.CardStorage;
import org.wcci.cardsagainststupidity.storage.DeckStorage;
import org.wcci.cardsagainststupidity.storage.TopicStorage;

import java.util.Collection;

@RestController
@RequestMapping("decks")
public class DeckController {

    private DeckStorage deckStorage;

    public DeckController(DeckStorage deckStorage) {
        this.deckStorage = deckStorage;
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





}