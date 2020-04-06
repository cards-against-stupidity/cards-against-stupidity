package org.wcci.cardsagainststupidity.controllers;


import org.springframework.web.bind.annotation.*;
import org.wcci.cardsagainststupidity.models.Card;
import org.wcci.cardsagainststupidity.storage.CardStorage;

import java.util.Collection;
import java.util.Optional;

@RestController
@RequestMapping("cards")
public class CardController {

    private CardStorage cardStorage;

    public CardController(CardStorage cardStorage) {
        this.cardStorage = cardStorage;
    }

    @GetMapping
    public Collection<Card> allCards() {
        return cardStorage.findAllCards();
    }

    @GetMapping("/{term}")
    public Card cardByTerm(@PathVariable String term) {
        return cardStorage.findCardByTerm(term).orElse(null);
    }

    @GetMapping("/id/{id}")
    public Card cardById(@PathVariable Long id) {
        return cardStorage.findById(id).orElse(null);
    }

    @PutMapping("/create")
    public Collection<Card> createCard(@RequestBody Card cardToAdd) {
        cardStorage.save(cardToAdd);
        return cardStorage.findAllCards();
    }

    @DeleteMapping("/delete")
    public Collection<Card> deleteCard(@RequestParam Long id) {
        cardStorage.delete(id);
        return cardStorage.findAllCards();
    }
}
