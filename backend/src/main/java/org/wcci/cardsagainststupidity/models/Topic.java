package org.wcci.cardsagainststupidity.models;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Objects;

@Entity
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "title")
public class Topic {
    
    @Id
    @GeneratedValue
    private Long id;
    private String title;
    @OneToMany(mappedBy = "topic")
    @JsonIgnoreProperties({"topic", "cards"})
    private Collection<Deck> decks = new ArrayList<>();
    @ManyToMany
    private Collection<User> users;
    
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
