package org.wcci.cardsagainststupidity.models;

import javax.persistence.*;
import java.util.Collection;

@Entity
public class Deck {
    
    @Id
    @GeneratedValue
    private Long id;
    private String title;
    @OneToMany(mappedBy = "deck")
    private Collection<Card> cards;
    @ManyToOne
    private Topic topic;
    
    public Deck() {
    }
    
    public Deck(String title) {
        this.title = title;
    }
    
    public String getTitle() {
        return title;
    }
    
    public Collection<Card> getCards() {
        return cards;
    }
    
    public Topic getTopic() {
        return topic;
    }
}
