package org.wcci.cardsagainststupidity.models;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import java.util.Objects;

@Entity
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "term")
public class Card {
    
    @Id
    @GeneratedValue
    private Long id;
    private String term;
    private String definition;
    @ManyToOne
    @JsonIgnoreProperties("cards")
    private Deck deck;
    
    public Card() {
    }
    
    public Card(String term, String definition) {
        this.term = term;
        this.definition = definition;
    }
    
    public Card(String term, String definition, Deck deck) {
        this.term = term;
        this.definition = definition;
        this.deck = deck;
        deck.addCard(this);
    }
    
    public Long getId() {
        return id;
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
    
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Card card = (Card) o;
        return Objects.equals(term, card.term) &&
                Objects.equals(definition, card.definition);
    }
    
    @Override
    public int hashCode() {
        return Objects.hash(term, definition);
    }

    public void setTerm(String term) {
        this.term = term;
    }

    public void setDefinition(String definition) {
        this.definition = definition;
    }
}
