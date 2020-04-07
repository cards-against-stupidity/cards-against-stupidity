package org.wcci.cardsagainststupidity.storage.repositories;

import org.springframework.data.repository.CrudRepository;
import org.wcci.cardsagainststupidity.models.User;

import java.util.Optional;

public interface UserRepository extends CrudRepository<User, Long> {
    
    Optional<User> findByUsername(String username);
    
}
