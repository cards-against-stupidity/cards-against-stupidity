package org.wcci.cardsagainststupidity.auth.storage.repositories;

import org.springframework.data.repository.CrudRepository;
import org.wcci.cardsagainststupidity.auth.models.User;

import java.util.Optional;

public interface UserRepository extends CrudRepository<User, Long> {
    
    Optional<User> findByUsername(String username);
    
}
