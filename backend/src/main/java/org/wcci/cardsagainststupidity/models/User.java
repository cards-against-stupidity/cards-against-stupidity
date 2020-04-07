package org.wcci.cardsagainststupidity.models;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import org.wcci.cardsagainststupidity.models.Topic;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.util.Collection;

@Entity
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "username")
public class User {
    
    @Id
    @GeneratedValue
    private Long id;
    
    @NotEmpty
    @NotNull
    private String username;
    
    @NotEmpty
    @NotNull
    private String password;
    
    @Transient // Ignored by mapping
    private String retypePassword;
    
    @ManyToMany
    private Collection<Topic> topics;
    
    protected User() {
    }
    
    public User(String username, String password, String retypePassword){
        this.username = username;
        this.password = password;
        this.retypePassword = retypePassword;
    }
    
    public String getUsername() {
        return username;
    }
    
    public void setUsername(String username) {
        this.username = username;
    }
    
    public String getPassword() {
        return password;
    }
    
    public void setPassword(String password) {
        this.password = password;
    }
    
    public String getRetypePassword() {
        return retypePassword;
    }
    
    public void setRetypePassword(String retypePassword) {
        this.retypePassword = retypePassword;
    }
}
