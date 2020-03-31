package org.wcci.cardsagainststupidity.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Objects;

@Entity
public class Topic {
    
    @Id
    @GeneratedValue
    private Long id;
    private String title;
    @OneToMany(mappedBy = "topic")
    private Collection<Deck> decks = new ArrayList<>();
    
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
    
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Topic topic = (Topic) o;
        return Objects.equals(title, topic.title);
    }
    
    @Override
    public int hashCode() {
        return Objects.hash(title);
    }
}
