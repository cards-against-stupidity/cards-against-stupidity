package org.wcci.cardsagainststupidity.storage;

import org.wcci.cardsagainststupidity.models.Topic;

import java.util.Optional;

public interface TopicStorage {
    
    Optional<Topic> findById(Long id);
    
    Optional<Topic> findTopicByTitle(String title);
    
}
