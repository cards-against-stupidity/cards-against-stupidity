package org.wcci.cardsagainststupidity.controllers;

import org.springframework.http.MediaType;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.wcci.cardsagainststupidity.models.User;
import org.wcci.cardsagainststupidity.storage.UserStorage;
import org.wcci.cardsagainststupidity.validator.UserValidator;

import java.util.Arrays;
import java.util.Collection;
import java.util.Optional;

@RestController
public class UserController {
    
    private final UserStorage userStorage;
    private final UserValidator userValidator;
    
    public UserController(UserStorage userStorage, UserValidator validator) {
        this.userStorage = userStorage;
        userValidator = validator;
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
    public String registerUser(/*@RequestParam String username,
                               @RequestParam String password,
                             @RequestParam String retypePassword,*/
            @RequestBody User newUser,
            BindingResult bindingResult) {
//        User newUser = new User(username, password, retypePassword);
        
        userValidator.validate(newUser, bindingResult);
        
        if (bindingResult.hasErrors()) {
            return "failure";
        }
        
        userStorage.save(newUser);
        
        return newUser.getUsername();
    }
    
}
