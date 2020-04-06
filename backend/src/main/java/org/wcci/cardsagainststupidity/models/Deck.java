package org.wcci.cardsagainststupidity.models;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.Objects;

@Entity
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "title")
public class Deck {
    
    @Id
    @GeneratedValue
    private Long id;
    private String title;
    @OneToMany(mappedBy = "deck")
    @JsonIgnoreProperties("deck")
    private Collection<Card> cards = new ArrayList<>();
    @ManyToOne
    @JsonIgnoreProperties("decks")
    private Topic topic;
    
    public Deck() {
    }
    
    public Deck(String title) {
        this.title = title;
    }
    
    public Deck(String title, Topic topic) {
        this.title = title;
        this.topic = topic;
        topic.getDecks().add(this);
    }
    
    public String getTitle() {
        return title;
    }
    
    public Collection<Card> getCards() {
        return cards;
    }
    
    public void addCards(Card... cards) {
        this.cards.addAll(Arrays.asList(cards));
    }
    
    public void addCard(Card card) {
        cards.add(card);
    }
    
    public Topic getTopic() {
        return topic;
    }
    
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Deck deck = (Deck) o;
        return Objects.equals(title, deck.title) &&
                Objects.equals(topic, deck.topic);
    }
    
    @Override
    public int hashCode() {
        return Objects.hash(title, topic);
    }


}
