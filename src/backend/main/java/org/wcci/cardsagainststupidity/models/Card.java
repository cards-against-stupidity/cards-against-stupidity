package org.wcci.cardsagainststupidity.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class Card {
    
    @Id
    @GeneratedValue
    private Long id;
    private String term;
    private String definition;
    @ManyToOne
    private Deck deck;
    
    public Card() {
    }
    
    public Card(String term, String definition) {
        this.term = term;
        this.definition = definition;
    }
    
    public String getTerm() {
        return term;
    }
    
    public String getDefinition() {
        return definition;
    }
    
    public Deck getDeck() {
        return deck;
    }
}
