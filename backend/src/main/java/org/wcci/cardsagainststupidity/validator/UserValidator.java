package org.wcci.cardsagainststupidity.validator;

import org.springframework.stereotype.Component;
import org.springframework.validation.Errors;
import org.springframework.validation.ValidationUtils;
import org.springframework.validation.Validator;
import org.wcci.cardsagainststupidity.models.User;
import org.wcci.cardsagainststupidity.storage.repositories.UserRepository;

@Component
public class UserValidator implements Validator {
    
    private final UserRepository userRepository;
    
    public UserValidator(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
    
    @Override
    public boolean supports(Class<?> clazz) {
        return User.class.equals(clazz);
    }
    
    @Override
    public void validate(Object target, Errors errors) {
        User userToValidate = (User) target;
        
        ValidationUtils.rejectIfEmptyOrWhitespace(errors, "username",
                "NotEmpty");
        
        if (userToValidate.getUsername().length() > 16 || userToValidate.getUsername().length() <= 6) {
            errors.reject("Size.username");
        }
        
        if (userRepository.findByUsername(userToValidate.getUsername()).isPresent()) {
            errors.reject("Duplicate.username");
        }
        
        if (userToValidate.getPassword().length() < 6) {
            errors.reject("Size.password");
        }
        
        if (!userToValidate.getPassword().equals(userToValidate.getRetypePassword())) {
            errors.reject("Wrong.password.retype");
        }
    }
}
