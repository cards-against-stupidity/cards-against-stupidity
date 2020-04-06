package org.wcci.cardsagainststupidity.auth.services;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

@Service
public class SecurityServiceImpl implements SecurityService {
    
    private final AuthenticationManager authenticationManager;
    
    private final UserDetailsService userDetailsService;
    
    public SecurityServiceImpl(AuthenticationManager authenticationManager, @Qualifier("userDetailsServiceImpl") UserDetailsService userDetailsService) {
        this.authenticationManager = authenticationManager;
        this.userDetailsService = userDetailsService;
    }
    
    @Override
    public String findLoggedInUsername() {
        Object userDetails =
                SecurityContextHolder.getContext().getAuthentication().getDetails();
        
        if (userDetails instanceof UserDetails) {
            return ((UserDetails) userDetails).getUsername();
        }
        
        return null;
    }
}
