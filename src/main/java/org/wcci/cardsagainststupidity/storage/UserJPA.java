package org.wcci.cardsagainststupidity.storage;

import org.springframework.stereotype.Service;
import org.wcci.cardsagainststupidity.models.User;
import org.wcci.cardsagainststupidity.storage.repositories.UserRepository;

import java.util.Collection;
import java.util.Optional;

@Service
public class UserJPA implements UserStorage {
    
    private UserRepository userRepository;
    
    public UserJPA(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
    
    @Override
    public Optional<User> findByUsername(String username) {
        return userRepository.findByUsername(username);
    }
    
    @Override
    public Optional<User> findById(Long id) {
        return userRepository.findById(id);
    }
    
    @Override
    public Optional<User> findByUsernameAndPassword(String username, String password) {
        return userRepository.findByUsernameAndPassword(username, password);
    }
    
    @Override
    public void save(User newUser) {
        userRepository.save(newUser);
    }
    
    @Override
    public Collection<User> findAll() {
        return (Collection<User>) userRepository.findAll();
    }
}
