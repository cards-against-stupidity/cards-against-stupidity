package org.wcci.cardsagainststupidity.auth.services;

import org.wcci.cardsagainststupidity.auth.models.User;

import java.util.Optional;

public interface UserService {

    void save(User user);
    
    Optional<User> findByUsername(String username);

}
