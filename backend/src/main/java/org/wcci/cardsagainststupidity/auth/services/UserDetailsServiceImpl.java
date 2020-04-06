package org.wcci.cardsagainststupidity.auth.services;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.wcci.cardsagainststupidity.auth.models.User;
import org.wcci.cardsagainststupidity.auth.storage.repositories.UserRepository;

import java.util.Optional;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {
    
    private final UserRepository userRepository;
    
    public UserDetailsServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
    
    @Override
    @Transactional(readOnly = true)
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<User> loadedUser = userRepository.findByUsername(username);
        
        if (loadedUser.isPresent()) {
            return org.springframework.security.core.userdetails.User.withUsername(loadedUser.get().getUsername())
                    .password(loadedUser.get().getPassword()).build();
        }
        
        throw new UsernameNotFoundException(username);
    }
}
