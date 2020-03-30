package org.wcci.cardsagainststupidity.storage;

import org.springframework.stereotype.Service;
import org.wcci.cardsagainststupidity.models.Topic;
import org.wcci.cardsagainststupidity.storage.repositories.TopicRepository;

import java.util.Optional;

@Service
public class TopicJPA implements TopicStorage {
    
    private TopicRepository topicRepository;
    
    public TopicJPA(TopicRepository topicRepository) {
        this.topicRepository = topicRepository;
    }
    
    @Override
    public Optional<Topic> findById(Long id) {
        return topicRepository.findById(id);
    }
    
    @Override
    public Optional<Topic> findTopicByTitle(String title) {
        return topicRepository.findTopicByTitle(title);
    }
}
