package org.wcci.cardsagainststupidity.storage.repositories;

import org.springframework.data.repository.CrudRepository;
import org.wcci.cardsagainststupidity.models.Topic;

import javax.swing.text.html.Option;
import java.util.Optional;

public interface TopicRepository extends CrudRepository<Topic, Long> {
    
    Optional<Topic> findTopicByTitle(String title);

    
}
