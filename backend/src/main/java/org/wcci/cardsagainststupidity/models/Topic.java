package org.wcci.cardsagainststupidity.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.Collection;

@Entity
public class Topic {
    
    @Id
    @GeneratedValue
    private Long id;
    private String title;
    @OneToMany(mappedBy = "topic")
    private Collection<Deck> decks;
    
    public Topic() {
    }
    
    public Topic(String title){
        this.title = title;
    }
    
    public String getTitle() {
        return title;
    }
    
    public Collection<Deck> getDecks() {
        return decks;
    }
}
