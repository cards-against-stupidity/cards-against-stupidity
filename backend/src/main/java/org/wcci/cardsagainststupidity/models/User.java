package org.wcci.cardsagainststupidity.models;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import org.wcci.cardsagainststupidity.models.Topic;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.util.ArrayList;
import java.util.Collection;

@Entity
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "username")
public class User {
    
    @Id
    @GeneratedValue
    private Long id;
    
    private String username;
    
    private String password;
    
    @Transient // Ignored by mapping
    private String retypePassword;
    
    @ManyToMany
    @JsonIgnoreProperties({"decks", "users"})
    private Collection<Topic> topics;
    
    private boolean loggedIn;
    
    protected User() {
    }
    
    public User(String username, String password, String retypePassword){
        this.username = username;
        this.password = password;
        this.retypePassword = retypePassword;
        topics = new ArrayList<>();
        loggedIn = false;
    }
    
    public void setLoggedIn(boolean loggedIn) {
        this.loggedIn = loggedIn;
    }
    
    public boolean isLoggedIn() {
        return loggedIn;
    }
    
    public Collection<Topic> getTopics() {
        return topics;
    }
    
    public String getUsername() {
        return username;
    }
    
    public String getPassword() {
        return password;
    }
    
    public String getRetypePassword() {
        return retypePassword;
    }
}
