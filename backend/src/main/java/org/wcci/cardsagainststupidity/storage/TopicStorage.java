package org.wcci.cardsagainststupidity.storage;

import org.wcci.cardsagainststupidity.models.Deck;
import org.wcci.cardsagainststupidity.models.Topic;

import java.util.Collection;
import java.util.Optional;

public interface TopicStorage {
    
    Optional<Topic> findById(Long id);
    Optional<Topic> findByDeckId(Long id);
    Optional<Topic> findTopicByTitle(String title);

    Collection<Topic> findAllTopics();

    void save(Topic topic);

    void delete(Long id);
    
}
