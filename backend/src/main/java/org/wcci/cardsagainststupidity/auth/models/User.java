package org.wcci.cardsagainststupidity.auth.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Transient;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

@Entity
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
