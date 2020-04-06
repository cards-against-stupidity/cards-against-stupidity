package org.wcci.cardsagainststupidity.auth.validator;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.validation.Errors;
import org.springframework.validation.ValidationUtils;
import org.springframework.validation.Validator;
import org.wcci.cardsagainststupidity.auth.models.User;
import org.wcci.cardsagainststupidity.auth.services.UserService;

@Component
public class UserValidator implements Validator {
    
    private final UserService userService;
    
    public UserValidator(UserService userService) {
        this.userService = userService;
    }
    
    @Override
    public boolean supports(Class<?> clazz) {
        return User.class.equals(clazz);
    }
    
    @Override
    public void validate(Object target, Errors errors) {
        User userToValidate = (User) target;
    
        ValidationUtils.rejectIfEmptyOrWhitespace(errors,
                userToValidate.getUsername(), "NotEmpty");
        
        if (userToValidate.getUsername().length() > 16 || userToValidate.getUsername().length() <= 6) {
            errors.reject("Size.username");
        }
        
        if (userService.findByUsername(userToValidate.getUsername()).isPresent()) {
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
