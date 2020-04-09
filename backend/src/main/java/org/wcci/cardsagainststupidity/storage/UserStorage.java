package org.wcci.cardsagainststupidity.storage;

import org.wcci.cardsagainststupidity.models.User;

import java.util.Collection;
import java.util.Optional;

public interface UserStorage {
    
    Optional<User> findByUsername(String username);
    
    Optional<User> findById(Long id);
    
    Optional<User> findByUsernameAndPassword(String username, String password);
    
    void save(User newUser);
    
    Collection<User> findAll();
    
}
