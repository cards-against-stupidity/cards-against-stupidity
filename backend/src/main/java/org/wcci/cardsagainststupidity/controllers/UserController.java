package org.wcci.cardsagainststupidity.controllers;

import org.springframework.http.MediaType;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.wcci.cardsagainststupidity.models.Topic;
import org.wcci.cardsagainststupidity.models.User;
import org.wcci.cardsagainststupidity.storage.TopicStorage;
import org.wcci.cardsagainststupidity.storage.UserStorage;
import org.wcci.cardsagainststupidity.validator.UserValidator;

import java.util.Collection;
import java.util.Optional;

@RestController
public class UserController {
    
    private final UserStorage userStorage;
    private final UserValidator userValidator;
    private final TopicStorage topicStorage;
    
    public UserController(UserStorage userStorage, UserValidator validator, TopicStorage storage) {
        this.userStorage = userStorage;
        userValidator = validator;
        topicStorage = storage;
    }
    
    @GetMapping("/users")
    public Collection<User> getAllUsers() {
        return userStorage.findAll();
    }
    
    @PostMapping("auth/login")
    public User loginUser(@RequestParam String username,
                          @RequestParam String password) {
        Optional<User> loggingInUser = userStorage.findByUsernameAndPassword(username,
                password);
        
        if (loggingInUser.isPresent()) {
            
            if (loggingInUser.get().isLoggedIn()) {
                return null;
            }
            
            loggingInUser.get().setLoggedIn(true);
            
            userStorage.save(loggingInUser.get());
            
            return loggingInUser.get();
        }
        
        return null;
    }
    
    @PostMapping(value = "auth/register", consumes =
            MediaType.APPLICATION_JSON_VALUE)
    public String registerUser(@RequestBody User newUser,
                               BindingResult bindingResult) {
        
        userValidator.validate(newUser, bindingResult);
        
        if (bindingResult.hasErrors()) {
            return "failure";
        }
        
        userStorage.save(newUser);
        
        return newUser.getUsername();
    }
    
    @PutMapping(value = "/users/{username}/{topicTitle}", consumes = MediaType.APPLICATION_JSON_VALUE)
    public String saveDeckToUser(@PathVariable String username,
                                 @PathVariable String topicTitle) {
        Optional<User> retUser = userStorage.findByUsername(username);
        
        Optional<Topic> retTopic = topicStorage.findTopicByTitle(topicTitle);
        
        if (retUser.isPresent()) {
            
            if (retTopic.isPresent()) {
                
                retUser.get().getTopics().add(retTopic.get());
                
                return "success";
            } else {
                return topicTitle + " does not exist";
            }
        }
        return "failure";
    }
    
}
